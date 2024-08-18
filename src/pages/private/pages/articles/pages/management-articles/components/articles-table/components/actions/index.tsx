import { ArticleStatus } from "../../../../types/Article";
import { ApproveButton } from "./components/approve-button";
import { CancelButton } from "./components/cancel-button";
import { PublishButton } from "./components/publish-button";

interface ActionsProps {
  readonly status: ArticleStatus
}

export function Actions({ status }: ActionsProps) {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <PublishButton status={status} />
      <ApproveButton status={status} />
      <CancelButton status={status}/>
    </div>
  )
}