export interface Author {
  readonly id: string
  readonly name: string
  readonly avatar: string | null
}

export interface Category {
  readonly id: string
  readonly title: string
}

export type ArticleStatus = 'created' | 'approved' | 'published' | 'unpublished'

export interface Article {
  readonly id: string
  readonly title: string
  readonly categories: Category[]
  readonly author: Author
  readonly status: ArticleStatus
}