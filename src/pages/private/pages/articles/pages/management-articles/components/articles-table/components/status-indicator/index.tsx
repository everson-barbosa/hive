import { ArticleStatus } from "../../../../types/Article";

interface StatusIndicatorInfo {
  readonly text: string
  readonly color: string
}

const STATUS_MAPPER: Record<ArticleStatus, StatusIndicatorInfo> = {
  approved: {
    color: 'bg-slate-400',
    text: 'Aprovado'
  },
  created: {
    color: 'bg-slate-400',
    text: 'Criado'
  },
  published: {
    color: 'bg-emerald-400',
    text: 'Publicado'
  },
  unpublished: {
    color: 'bg-slate-400',
    text: 'Inativo'
  }
}

interface StatusIndicatorProps {
  readonly status: ArticleStatus
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const { text, color } = STATUS_MAPPER[status]

  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <div className={`h-2 w-2 rounded-full ${color}`}/>
      <span className="text-sm">
        {text}
      </span>
    </div>
  )
}