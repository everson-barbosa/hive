import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './contexts/theme-context'

export function App() {
  
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="@hive:theme-appearence">
        <Helmet titleTemplate='%s | hive'/>
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster richColors />
    </HelmetProvider>
  )
}
