import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

interface PaginationProps {
  readonly pageIndex: number
  readonly perPage: number
  readonly totalCount: number
  readonly entityName?: string
}

export function Pagination({ 
  pageIndex, 
  perPage, 
  totalCount, 
  entityName = 'items(s)' 
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground"> 
        Total de {totalCount} {entityName}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronsLeftIcon className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Proxima página</span>
          </Button>
          <Button variant='outline' className="h-8 w-8 p-0">
            <ChevronsRightIcon className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}