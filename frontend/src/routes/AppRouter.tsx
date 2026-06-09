import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { SurveyPage } from '../pages/SurveyPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/encuesta',
    element: <SurveyPage />,
  },
  // Aquí agregaremos pronto las rutas de login y dashboard
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}