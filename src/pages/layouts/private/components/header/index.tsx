import { ThemeToggle } from "@/components/utils/theme-toggle";
import { AccountMenu } from "./components/account-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-6 bg-muted-background border-b">
      <span>hive</span>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <AccountMenu />
      </div>
    </header>
  )
}