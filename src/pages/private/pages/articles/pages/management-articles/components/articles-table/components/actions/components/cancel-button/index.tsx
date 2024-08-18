import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { ArticleStatus } from "../../../../../../types/Article";

interface CancelButtonProps {
  readonly status: ArticleStatus
}

export function CancelButton({ status }: CancelButtonProps) {
  const isAllowedStatus = status === 'published'
  
  if (isAllowedStatus) {
    return (
      <Button className="gap-1" size='xs' variant='outline'>
        Cancelar  
        <XIcon className="w-4 h-4"/>
      </Button>  
    )
  }

  return null
}