import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import ProjectDetail from './pages/ProjectDetail'

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <App />
  },
  {
    path: '/portfolio/project/:projectId',
    element: <ProjectDetail />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
