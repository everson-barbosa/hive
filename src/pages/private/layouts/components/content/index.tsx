import { Outlet } from "react-router-dom"
import { Header } from "./components/header"
import { usePrivateLayout } from "../../contexts/private-layout-context"

export function Content() {
  const { isMenuOpen } = usePrivateLayout()

  const contentWidth = isMenuOpen ? 'w-[calc(100%_-_20rem)]' : 'w-[calc(100%_-_5rem)]'

  return (
    <div className={contentWidth}>
      <Header />
      <main 
        className="p-6 min-h-[calc(100vh_-_3.5rem)]"
      >
        <Outlet />
      </main>
    </div>
  )
}