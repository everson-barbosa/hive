import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePrivateLayout } from "@/pages/private/layouts/contexts/private-layout-context";
import { LibraryBigIcon } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Icon = 'articles'

const icons: Record<Icon, ReactNode> = {
  articles: <LibraryBigIcon className="h-6 w-6" />
}

interface FeatureItemProps {
  readonly name: string
  readonly icon: Icon
}

export function FeatureItem({ name, icon }: FeatureItemProps) {
  const { isMenuOpen } = usePrivateLayout()

  return (
    <li>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline' asChild>
              <NavLink 
                to='/articles' 
                className='flex flex-row items-center gap-2 w-full rounded'
              >
                {icons[icon]}
                {
                  isMenuOpen && 
                    <span className="text-md">
                      {name}
                    </span>
                }
              </NavLink>
            </Button>
          </TooltipTrigger>

          <TooltipContent side="right" className={isMenuOpen ? 'hidden' : ''}>
            <p>
              {name}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  )
}