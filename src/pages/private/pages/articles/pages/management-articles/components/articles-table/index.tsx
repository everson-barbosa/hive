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
    <div className="max-w-full overflow-x-auto rounded border">
      <Table className="w-full min-w-[600px]">
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-12" />
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
              <TableRow key={article.id} className="">
                <TableCell align='center'>
                  <SearchIcon className="w-4 h-4"/>
                </TableCell>
                <TableCell>
                  <span className="text-sm truncate max-w-80">
                    {article.title}
                  </span>
                </TableCell>
                <TableCell>
                  <AuthorContent author={article.author}/>
                </TableCell>
                <TableCell align="center">
                  {article.categories.map(article => (
                    <span key={article.id}>{article.title}</span>
                  ))}
                </TableCell>
                <TableCell>
                  <StatusIndicator status={article.status} />
                </TableCell>
                <TableCell>
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