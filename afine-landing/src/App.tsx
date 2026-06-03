import { useState } from 'react'
import './App.css'

const CheckCircle = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Users = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const ChartBar = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const Chip = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

const Currency = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Shield = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const Mail = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Location = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Clock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const WhatsApp = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const Banknote = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const UserGroup = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const PlayVideo = () => (
  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const VideoCamera = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

function App() {
  const [activeCourse, setActiveCourse] = useState<number | null>(null)

  const courses = [
    {
      id: 1,
      title: "Finanzas Básicas",
      subtitle: "Niveles I, II y III",
      icon: <ChartBar />,
      color: "from-blue-600 to-blue-800",
      price: "$2,500 MXN por módulo",
      priceNote: "3 módulos disponibles",
      target: "Emprendedores, adultos mayores, jóvenes estudiantes y profesionales sin experiencia financiera",
      modules: [
        { name: "Nivel I - Fundamentos de Inversión", content: "Renta fija vs variable, perfiles de inversor, productos bancarios básicos" },
        { name: "Nivel II - Inversiones en Bolsa", content: "Acciones, ETF's, análisis fundamental, evitando fraudes" },
        { name: "Nivel III - Financiamiento Personal", content: "Créditos, préstamos, negociación bancaria, detección de trampas" }
      ],
      result: "Al terminar, sabrás elegir la mejor opción de inversión según tu perfil Y detectar empresas financieras fraudulentas.",
      includes: ["Material práctico", "Casos reales", "Guest speakers (banqueros e inversionistas)"]
    },
    {
      id: 2,
      title: "Financiamiento para Emprendedores",
      subtitle: "Domina las opciones de financiamiento",
      icon: <Currency />,
      color: "from-emerald-600 to-emerald-800",
      price: "$2,500 MXN",
      target: "Emprendedores, empresarios PyMEs, tesoreros de empresas medianas",
      modules: [
        { name: "Módulo 1 - Conoce tus opciones", content: "Créditos bancarios (hipotecarios, prendarios, revolventes), financieras alternativas (Sofom, Sapi), coinversionistas, programas gubernamentales (FIRA, Fondeadora, etc.)" },
        { name: "Módulo 2 - Negocia como experto", content: "Cómo presentar tu proyecto a banqueros, errores comunes que arruinan tu solicitud, tips de negociación y asesoría personalizada, lectura de cláusulas y letra pequeña" }
      ],
      result: "Tomarás mejores decisiones de financiamiento para tu negocio.",
      includes: ["Asesoría personalizada", "Plantillas de negocio", "Simulacros de negociación"]
    },
    {
      id: 3,
      title: "Introducción al mercado bursátil",
      subtitle: "Análisis fundamental y técnico con modelos de IA",
      icon: <Chip />,
      color: "from-purple-600 to-purple-800",
      price: "$2,500 MXN",
      target: "Profesionistas, alumnos de finanzas/banca y emprendedores con conocimientos básicos de mercado bursátil",
      prerequisite: "Prerrequisito: Haber completado Finanzas Básicas (Nivel I mínimo) o demostrar experiencia equivalente",
      modules: [
        { name: "Módulo 1 - Análisis Fundamental", content: "Métricas financieras clave (P/E, ROE, deuda/EBITDA), lectura de reportes trimestrales, valoración de empresas" },
        { name: "Módulo 2 - Análisis Técnico", content: "Indicadores (RSI, MACD, medias móviles), patrones de velas japonesas, soportes y resistencias" },
        { name: "Módulo 3 - IA para minimizar riesgos", content: "Fundamentos de machine learning para finanzas, construcción de protocolo conservador o moderador en IA" }
      ],
      result: "Crearás un modelo de IA personalizado que minimice el riesgo en tus inversiones bursátiles.",
      includes: ["Código Python", "Bases de datos históricas", "Plantillas de modelos"],
      note: "La IA te ayuda a analizar, TÚ decides"
    }
  ]

  const benefits = [
    { icon: <Users />, title: "Instructor Experto", description: "35 años de experiencia en banca a nivel dirección" },
    { icon: <ChartBar />, title: "Contenido Actualizado", description: "Temas prácticos adaptados al mercado mexicano" },
    { icon: <Chip />, title: "IA como Herramienta", description: "La decisión es nuestra, la IA nos apoya" },
    { icon: <Shield />, title: "Detección de Fraudes", description: "Aprende a identificar empresas fraudulentas" }
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo-afine.png" alt="AFINE" className="h-12" />
          </div>
          <div className="flex gap-6">
            <a href="#cursos" className="text-slate-300 hover:text-white transition">Cursos</a>
            <a href="#beneficios" className="text-slate-300 hover:text-white transition">Beneficios</a>
            <a href="#metodologia" className="text-slate-300 hover:text-white transition">Metodología</a>
            <a href="#contacto" className="text-slate-300 hover:text-white transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Inscripciones abiertas
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <img src="/logo-afine.png" alt="AFINE" className="inline-block h-48 md:h-72 mb-4" />
            <br />
            Finanzas Reales para<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Resultados Reales
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            ¿Te suena familiar? Cursos de finanzas llenos de teoría innecesaria, análisis de estados financieros
            que nunca aplicarás, y metodologías obsoletas que no funcionan en el mundo real.
          </p>
          <p className="text-lg text-white font-medium mb-8">
            Somos diferente. Nuestro instructor tiene
            <span className="text-blue-400 font-bold"> 35 años de experiencia en banca</span> (nivel dirección),
            y nuestro enfoque es <span className="text-blue-400 font-bold">100% práctico</span>:
            teoría básica + aplicación real + casos del día a día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cursos" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-500/25">
              Ver cursos disponibles
            </a>
            <a href="#contacto" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition border border-slate-700">
              Contactar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Conoce Afine
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            35 años de experiencia en banca a nivel dirección te esperan
          </p>
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-blue-500/10">
            <video
              className="w-full h-full"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/presentacion-afine.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            ¿Qué vas a encontrar en AFINE?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Un enfoque diferente centrado en lo que realmente necesitas saber
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                <ChartBar />
              </div>
              <h3 className="text-white font-semibold mb-2">Temas Actuales</h3>
              <p className="text-slate-400 text-sm">Contenido actualizado al mercado mexicano, no teorías obsoletas.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
                <Users />
              </div>
              <h3 className="text-white font-semibold mb-2">Expertos del Sector</h3>
              <p className="text-slate-400 text-sm">Bancos, financieras e inversionistas reales compartiendo su experiencia.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                <Shield />
              </div>
              <h3 className="text-white font-semibold mb-2">Protección Total</h3>
              <p className="text-slate-400 text-sm">Aprende a detectar fraudes financieros antes de que sea tarde.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400">
                <Chip />
              </div>
              <h3 className="text-white font-semibold mb-2">IA como Aliada</h3>
              <p className="text-slate-400 text-sm">La IA como herramienta de apoyo, no como sustituto de tus decisiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus necesidades
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`bg-gradient-to-br ${course.color} p-6`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <p className="text-white/80">{course.subtitle}</p>
                  <div className="mt-4 inline-flex flex-col items-start gap-1 bg-white/20 px-3 py-1 rounded-full">
                    <span className="text-white font-bold">{course.price}</span>
                    {course.priceNote && <span className="text-white/70 text-xs">{course.priceNote}</span>}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Dirigido a</span>
                    <p className="text-slate-300 text-sm mt-1">{course.target}</p>
                  </div>
                  {course.prerequisite && (
                    <div className="mb-4 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                      <p className="text-amber-400 text-xs">{course.prerequisite}</p>
                    </div>
                  )}
                  <div className="space-y-3 mb-4">
                    {course.modules.map((mod, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-xs font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">{mod.name}</h4>
                          <p className="text-slate-400 text-xs mt-0.5">{mod.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-700 pt-4 mb-4">
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Resultado</span>
                    <p className="text-slate-300 text-sm mt-1">{course.result}</p>
                  </div>
                  {course.note && (
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 mb-4">
                      <p className="text-purple-400 text-xs font-medium">💡 {course.note}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {course.includes.map((item, idx) => (
                      <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#contacto"
                    className={`block w-full py-3 bg-gradient-to-r ${course.color} text-white font-semibold rounded-xl text-center hover:opacity-90 transition`}
                  >
                    Solicitar información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nuestra Metodología
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            ¿Por qué tomar nuestros cursos?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                <Users />
              </div>
              <h3 className="text-white font-semibold mb-2">35 Años de Experiencia</h3>
              <p className="text-slate-400 text-sm">Instructor con experiencia en banca a nivel dirección</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <ChartBar />
              </div>
              <h3 className="text-white font-semibold mb-2">100% Práctico</h3>
              <p className="text-slate-400 text-sm">Cursos realistas y adaptados a la actualidad</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                <Chip />
              </div>
              <h3 className="text-white font-semibold mb-2">IA como Herramienta</h3>
              <p className="text-slate-400 text-sm">La decisión es nuestra, la IA nos apoya</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400">
                <Shield />
              </div>
              <h3 className="text-white font-semibold mb-2">Grupos Pequeños</h3>
              <p className="text-slate-400 text-sm">Máximo 10 personas por curso</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                <div className="text-slate-300">Sesiones presenciales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">10</div>
                <div className="text-slate-300">Horas efectivas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">2</div>
                <div className="text-slate-300">Horarios disponibles</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                <Clock />
                <span className="text-slate-300 text-sm">Horarios: Matutino y Vespertino</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                <Location />
                <span className="text-slate-300 text-sm">Salas climatizadas</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                <UserGroup />
                <span className="text-slate-300 text-sm">Grupos de máximo 10 personas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            ¿Por qué elegir AFINE?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Razones simples y poderosas para confiar en nosotros
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para dominar tus finanzas?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Costos accesibles: <span className="font-bold text-white">$2,500 MXN por curso</span><br />
              5 sesiones de 2 horas (10 horas efectivas), en dos horarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/529994530002?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20cursos%20de%20AFINE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition"
              >
                <WhatsApp />
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:afinemeredida@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
              >
                <Mail />
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Contáctanos
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://wa.me/529994530002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-green-500/50 hover:bg-green-500/5 transition group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition">
                <WhatsApp />
              </div>
              <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
              <p className="text-slate-400 text-sm">999 453 0002</p>
            </a>
            <a
              href="mailto:afinemeredida@gmail.com"
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition">
                <Mail />
              </div>
              <h3 className="text-white font-semibold mb-1">Correo electrónico</h3>
              <p className="text-slate-400 text-sm">afinemeredida@gmail.com</p>
            </a>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                <Location />
              </div>
              <h3 className="text-white font-semibold mb-1">Ubicación</h3>
              <p className="text-slate-400 text-sm">Mérida, Yucatán, México</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 text-amber-400">
                <Clock />
              </div>
              <h3 className="text-white font-semibold mb-1">Horarios</h3>
              <p className="text-slate-400 text-sm">Matutino y vespertino</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              A
            </div>
            <span className="text-lg font-bold text-white">AFINE</span>
          </div>
          <p className="text-slate-500 text-sm">
            Asesoría Financiera de Negocios — Finanzas reales para resultados reales
          </p>
          <p className="text-slate-600 text-xs mt-2">
            © {new Date().getFullYear()} AFINE. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App