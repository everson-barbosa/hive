import { Button } from "@/components/ui/button";
import { usePrivateLayout } from "@/pages/private/layouts/contexts/private-layout-context";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export function ToggleButton() {
  const { isMenuOpen, toggleMenu } = usePrivateLayout()

  return (
    <Button 
      variant='outline' 
      className="absolute top-9 -right-4 rounded-full h-8 w-8 p-0"
      onClick={toggleMenu}
    >
      { 
        isMenuOpen ? 
          <ArrowLeftIcon className="h-4 w-4"/> : 
          <ArrowRightIcon className="h-4 w-4" />
      }
    </Button>
  )
}