import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from './pages/landing'
import Recipes from './pages/recipes'
import LandingLayout from './pages/landing-layout'
import RecipeDetailPage from './pages/recipe-detail'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: '',
        element: <Landing />
      },
      {
        path: 'recipes',
        element: <Recipes />
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetailPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)

function NotFound() {
  return (
    <div className="h-screen w-full bg-slate-200 text-gray-900">
      <h1 className="text-3xl font-bold underline">
        404 - Not Found
      </h1>
    </div>
  )
}