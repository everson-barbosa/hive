import { ToggleButton } from "./components/toggle-button";
import { usePrivateLayout } from "../../contexts/private-layout-context";
import { FeaturesList } from "./components/features-list";

export function AsideMenu() {
  const { isMenuOpen } = usePrivateLayout()

  const asideMenuWidth = isMenuOpen ? 'w-80' : 'w-20'

  return (
    <aside 
      className={`${asideMenuWidth} flex flex-col gap-8 p-2 bg-background border-r min-h-screen relative`}
    >
      <h2 className="text-lg">Aside menu</h2>
      <ToggleButton />
      <FeaturesList />
    </aside>
  )
}