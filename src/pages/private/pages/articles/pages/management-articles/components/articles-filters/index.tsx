import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export function ArticlesFilters() {
  return (
    <form className="flex flex-row items-center justify-start gap-2">
      <span className="text-sm">Filtros:</span>
      <Input placeholder="Título do artigo" className="h-8 max-w-80 bg-background shadow-none rounded"/>
      <Select defaultValue='all'>
        <SelectTrigger className="h-8 max-w-32 bg-background shadow-none rounded">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="shadow-none rounded">
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="crated">Criado</SelectItem>
          <SelectItem value="approved">Aprovado</SelectItem>
          <SelectItem value="published">Publicado</SelectItem>
          <SelectItem value="unpublished">Inativo</SelectItem>
        </SelectContent>
        <Button className="gap-2" size='sm'>
          <SearchIcon className="h-4 w-4" />
          Filtrar resultados
        </Button>
      </Select>
    </form>
  )
}