import { ThemeToggle } from "@/components/utils/theme-toggle";
import { AccountMenu } from "./components/account-menu";
import { ChevronsLeftRightEllipsis } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-6 bg-muted-background border-b">
      <div className="flex flex-row items-center gap-4">
        <ChevronsLeftRightEllipsis className="h-5 w-5" />
        <span>hive</span>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <AccountMenu />
      </div>
    </header>
  )
}