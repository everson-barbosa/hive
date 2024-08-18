import { Button } from "@/components/ui/button";
import { SquareCheckBigIcon } from "lucide-react";
import { ArticleStatus } from "../../../../../../types/Article";

interface ApproveButtonProps {
  readonly status: ArticleStatus
}

export function ApproveButton({ status }: ApproveButtonProps) {
  const isAllowedStatus = status === 'created'

  if (isAllowedStatus) {
    return (
      <Button className="gap-1" size='xs' variant='outline'>
        Aprovar
        <SquareCheckBigIcon className="w-4 h-4"/>
      </Button>
    )
  }
  
  return null
}