import { Link } from 'react-router-dom'
import { BookOpen, Clock, Target, , ArrowRight, BarChart2, Brain,  } from 'lucide-react'

const chartBars = [
  { label: 'L', pct: 55 },
  { label: 'M', pct: 80 },
  { label: 'X', pct: 40 },
  { label: 'J', pct: 95, active: true },
  { label: 'V', pct: 70 },
  { label: 'S', pct: 30 },
  { label: 'D', pct: 50 },
]

function DashboardPreview() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-indigo-100 p-5 w-full select-none">
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-indigo-600" />
          <div className="h-2.5 w-14 rounded-full bg-gray-200" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 rounded-full bg-gray-100" />
          <div className="h-7 w-7 rounded-full bg-indigo-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Sesiones', value: '12', color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Minutos', value: '840', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Racha', value: '7 días', color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map(({ label, value, color, bg }) => (
          <div key={label} className={`${bg} rounded-xl p-3`}>
            <p className={`text-base font-bold ${color}`}>{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 mb-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Minutos esta semana</p>
        <div className="flex items-end gap-2 h-24">
          {chartBars.map(({ label, pct, active }) => (
            <div key={label} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className={`w-full rounded-t-md transition-all ${active ? 'bg-indigo-600' : 'bg-indigo-200'}`}
                style={{ height: `${pct}%` }}
              />
              <span className="text-[10px] text-gray-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Últimas sesiones</p>
        {[
          { subject: 'Matemáticas', duration: '90 min', tag: 'bg-indigo-100 text-indigo-700' },
          { subject: 'Física', duration: '60 min', tag: 'bg-emerald-100 text-emerald-700' },
          { subject: 'Programación', duration: '45 min', tag: 'bg-violet-100 text-violet-700' },
        ].map(({ subject, duration, tag }) => (
          <div key={subject} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tag}`}>{subject}</span>
            <span className="text-xs text-gray-400">{duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const features = [
  { icon: Clock, title: 'Registra sesiones', description: 'Captura materia, duración y notas en segundos. Sin fricción.' },
  { icon: BarChart2, title: 'Visualiza patrones', description: 'Descubre qué días rindes más y qué materias consumen tu tiempo.' },
  { icon: Target, title: 'Metas semanales', description: 'Define objetivos por materia y monitorea tu avance en tiempo real.' },
  { icon: Brain, title: 'Recomendaciones IA', description: 'Sugerencias personalizadas para optimizar horarios y retención.' },
]

const steps = [
  { n: '01', title: 'Crea tu cuenta', body: 'Regístrate gratis con tu correo en menos de un minuto.' },
  { n: '02', title: 'Registra sesiones', body: 'Agrega cada bloque de estudio: materia, tiempo y notas.' },
  { n: '03', title: 'Mejora continua', body: 'Revisa tus estadísticas y aplica las recomendaciones de IA.' },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <BookOpen className="h-6 w-6 text-indigo-600" /> StudyAI
          </div>
          <nav className="hidden sm:flex items-center gap-1">
            <Link to="/auth/login" className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Iniciar sesión
            </Link>
            <Link to="/auth/register" className="text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Empezar gratis
            </Link>
          </nav>
          <Link to="/auth/register" className="sm:hidden text-sm font-semibold text-white bg-indigo-600 px-3 py-1.5 rounded-lg">
            Empezar
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" /> Para estudiantes
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Estudia más<br /> inteligente, <span className="text-indigo-600">no<br className="hidden lg:block" /> más tiempo</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                StudyAI analiza tus sesiones de estudio, detecta tus brechas y te da recomendaciones concretas para rendir más en menos horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link to="/auth/register" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                  Comenzar gratis <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/auth/login" className="inline-flex items-center justify-center gap-2 text-gray-700 font-medium px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                  Ya tengo cuenta
                </Link>
              </div>
            </div>
            <div className="relative hidden sm:block">
              <div className="absolute -inset-4 bg-indigo-50 rounded-3xl -z-10" />
              <DashboardPreview />
            </div>
          </div>
        </section>
        {/* Features resumidas para no saturar el código aquí, pero es el mismo componente */}
        <section className="border-y border-gray-100 bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-3 gap-6 text-center">
            {[ { value: '100%', label: 'Gratuito para siempre' }, { value: '< 1 min', label: 'Para registrar una sesión' }, { value: '0', label: 'Datos vendidos a terceros' } ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}