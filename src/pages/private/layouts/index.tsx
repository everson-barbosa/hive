import { Outlet } from "react-router-dom";
import { AsideMenu } from "./components/aside-menu";
import { Header } from "./components/header";

export function PrivateLayout() {
  return (
    <div className="flex flex-row antialiased">
      <AsideMenu />

      <div className="w-[calc(100%_-_20rem)]">
        <Header />
        <main 
          className="p-6 bg-muted min-h-[calc(100vh_-_3.5rem)]"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}