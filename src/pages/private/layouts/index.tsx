import { AsideMenu } from "./components/aside-menu";
import { Content } from "./components/content";
import { PrivateLayoutProvider } from "./contexts/private-layout-context";

export function PrivateLayout() {
  return (
    <PrivateLayoutProvider storageKey="@hive:aside-menu-is-open">
      <div className="flex flex-row antialiased">
        <AsideMenu />

        <Content />
      </div>
    </PrivateLayoutProvider>
  )
}