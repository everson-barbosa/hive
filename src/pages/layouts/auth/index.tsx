import { Outlet } from "react-router-dom";
import { ChevronsLeftRightEllipsis } from 'lucide-react'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <ChevronsLeftRightEllipsis className="h-5 w-5" />
          <span className="font-semibold">hive</span>
        </div>
        <footer>
          Painel do parceiro &copy; hive - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>

    </div>
  )
}