import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SearchIcon } from "lucide-react"
import { AuthorContent } from "./components/author-content"
import { Actions } from "./components/actions"
import { Article } from "../../types/Article"
import { StatusIndicator } from "./components/status-indicator"

interface ArticlesTableProps {
  readonly articles: Article[]
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  return (
    <div className="max-w-full overflow-x-auto">
      <Table className="border-separate border-spacing-y-2 w-full min-w-[600px]">
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-10" />
            <TableHead className="w-60">Título</TableHead>
            <TableHead align="center" className="w-10">Autor</TableHead>
            <TableHead align="center" className="w-40 text-center">Categorias</TableHead>
            <TableHead align="center" className="w-20 text-center">Status</TableHead>
            <TableHead className="w-20"/>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            articles.map(article => (
              <TableRow key={article.id} className="bg-background hover:bg-background">
                <TableCell className="py-1" align='center'>
                  <SearchIcon className="w-4 h-4"/>
                </TableCell>
                <TableCell className="py-1">
                  <span className="text-sm truncate max-w-80">
                    {article.title}
                  </span>
                </TableCell>
                <TableCell className="py-1">
                  <AuthorContent author={article.author}/>
                </TableCell>
                <TableCell align="center" className="py-1">
                  {article.categories.map(article => (
                    <span key={article.id}>{article.title}</span>
                  ))}
                </TableCell>
                <TableCell align="center">
                  <StatusIndicator status={article.status} />
                </TableCell>
                <TableCell className="py-1">
                  <Actions status={article.status}/>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}