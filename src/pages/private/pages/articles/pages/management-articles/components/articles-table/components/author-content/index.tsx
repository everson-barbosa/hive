import { Author } from "../../../../types/Article"

interface AuthorContentProps {
  author: Author
}

export function AuthorContent({ author }: AuthorContentProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="h-8 w-8 overflow-hidden rounded-full">
      {
        author.avatar ?
        <img 
          className="h-8 w-8"
          src={author.avatar} 
          alt={`Profile ${author.name}`}
        /> :
        <span className="flex items-center justify-center h-8 w-8 bg-orange-500">
          {author.name[0].toUpperCase()}
        </span>
      }
      </div>
    </div>
  )
}