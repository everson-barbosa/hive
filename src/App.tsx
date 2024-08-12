import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/routes/router'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function App() {
  
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | hive'/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
