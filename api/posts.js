const OWNER = process.env.GITHUB_OWNER || 'jadj24';
const REPO = process.env.GITHUB_REPO || 'afine-web';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const BLOG_PATH = process.env.GITHUB_BLOG_PATH || 'content/blog/posts.json';

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}

function requireEnv() {
  const missing = [];
  if (!process.env.GITHUB_TOKEN) missing.push('GITHUB_TOKEN');
  if (!process.env.ADMIN_PASSWORD) missing.push('ADMIN_PASSWORD');
  return missing;
}

function isAuthorized(req) {
  return req.headers['x-admin-password'] === process.env.ADMIN_PASSWORD;
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function githubRequest(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }

  if (!response.ok) {
    const message = data?.message || `GitHub API error ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

function normalizePosts(posts) {
  return posts
    .map((post) => ({
      id: String(post.id || '').trim(),
      title: String(post.title || '').trim(),
      category: String(post.category || 'Blog').trim(),
      date: String(post.date || '').trim(),
      author: String(post.author || 'AFINE').trim(),
      excerpt: String(post.excerpt || '').trim(),
      cover: String(post.cover || '').trim(),
      content: String(post.content || '').trim(),
      status: String(post.status || 'published').trim(),
      updatedAt: new Date().toISOString(),
    }))
    .filter((post) => post.id && post.title && post.content);
}

async function getPostsFile() {
  try {
    const file = await githubRequest(
      `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(BLOG_PATH).replaceAll('%2F', '/')}?ref=${encodeURIComponent(BRANCH)}`
    );

    const content = Buffer.from(file.content || '', 'base64').toString('utf8');
    const posts = JSON.parse(content || '[]');

    return {
      posts: Array.isArray(posts) ? posts : [],
      sha: file.sha,
    };
  } catch (error) {
    if (error.status === 404) {
      return { posts: [], sha: null };
    }

    throw error;
  }
}

async function savePostsFile(posts, currentSha) {
  const content = Buffer.from(JSON.stringify(posts, null, 2), 'utf8').toString('base64');

  const body = {
    message: `Actualizar blog AFINE (${posts.length} posts)`,
    content,
    branch: BRANCH,
    committer: {
      name: 'AFINE Blog Admin',
      email: 'afine-blog-admin@users.noreply.github.com',
    },
  };

  if (currentSha) body.sha = currentSha;

  return await githubRequest(
    `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(BLOG_PATH).replaceAll('%2F', '/')}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  );
}

export default async function handler(req, res) {
  try {
    const missing = requireEnv();

    if (missing.length) {
      return sendJson(res, 500, {
        error: 'Faltan variables de entorno en Vercel',
        missing,
      });
    }

    if (req.method === 'GET') {
      const { posts, sha } = await getPostsFile();
      return sendJson(res, 200, { posts, sha });
    }

    if (req.method === 'POST') {
      if (!isAuthorized(req)) {
        return sendJson(res, 401, { error: 'Contraseña incorrecta' });
      }

      const rawBody = await readBody(req);
      const payload = JSON.parse(rawBody || '{}');

      if (!Array.isArray(payload.posts)) {
        return sendJson(res, 400, { error: 'Formato inválido. Debe enviarse { posts: [] }' });
      }

      const cleanedPosts = normalizePosts(payload.posts);
      const current = await getPostsFile();
      const result = await savePostsFile(cleanedPosts, current.sha);

      return sendJson(res, 200, {
        ok: true,
        posts: cleanedPosts,
        commit: result.commit?.sha || null,
        url: result.content?.html_url || null,
      });
    }

    return sendJson(res, 405, { error: 'Método no permitido' });
  } catch (error) {
    return sendJson(res, error.status || 500, {
      error: error.message || 'Error interno',
      detail: error.data || null,
    });
  }
}
