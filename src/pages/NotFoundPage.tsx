import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <p className="text-8xl font-black text-gray-200">404</p>
      <h1 className="mt-2 text-xl font-semibold text-gray-700">Página no encontrada</h1>
      <p className="mt-2 mb-6 text-sm text-gray-500">La ruta que buscas no existe.</p>
      <Link to="/" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700">
        Volver al inicio
      </Link>
    </div>
  )
}

