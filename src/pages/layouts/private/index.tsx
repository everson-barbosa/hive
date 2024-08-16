import { Outlet } from "react-router-dom";
import { AsideMenu } from "./components/aside-menu";
import { Header } from "./components/header";

export function PrivateLayout() {
  return (
    <div className="flex flex-row antialiased">
      <AsideMenu />

      <div className="w-full">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}