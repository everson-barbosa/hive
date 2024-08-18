import { Button } from "@/components/ui/button";
import { SendHorizonalIcon } from "lucide-react";
import { ArticleStatus } from "../../../../../../types/Article";

interface PublishButtonProps {
  readonly status: ArticleStatus
}

export function PublishButton({ status }: PublishButtonProps) {
  const isAllowedStatus = status === 'approved' || status === 'unpublished'

  if (isAllowedStatus) {
    return (
      <Button className="gap-1" size='xs' variant='outline'>
        Publicar
        <SendHorizonalIcon className="w-4 h-4"/>
      </Button>
    )
  }
  
  return null
}