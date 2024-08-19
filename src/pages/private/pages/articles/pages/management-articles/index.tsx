import { Pagination } from "@/components/utils/pagination";
import { ArticlesFilters } from "./components/articles-filters";
import { ArticlesTable } from "./components/articles-table";

export function ManagementArticlesPage() {

  return (
    <div className="flex flex-col gap-6">
      <ArticlesFilters />
      <ArticlesTable articles={[
        { 
          id: '1', 
          author: 
            { id: '1', name: 'Everson', avatar: 'https://avatars.githubusercontent.com/u/44804713?v=4' }, 
          categories: 
            [
              { id: '1', title: 'Performance' },
              { id: '2', title: 'Security' }
            ],
          status: 'approved',
          title: 'Create a account in bank'        
        },
        { 
          id: '2', 
          author: 
            { id: '1', name: 'Everson', avatar: null }, 
            categories: 
            [
              { id: '1', title: 'Performance' },
            ],
          status: 'created',
          title: 'Create a account in bank'        
        },
        { 
          id: '3', 
          author: 
            { id: '1', name: 'Everson', avatar: null }, 
            categories: 
            [
              { id: '1', title: 'Performance' },
            ],
          status: 'published',
          title: 'Create a account in bank'        
        },
        { 
          id: '4', 
          author: 
            { id: '1', name: 'Everson', avatar: null }, 
            categories: 
            [
              { id: '1', title: 'Performance' },
            ],
          status: 'unpublished',
          title: 'Create a account in bank to render components and another thing un'        
        }
      ]}/>
      <Pagination pageIndex={0} perPage={10} totalCount={20} entityName="artigos(s)" />
    </div>
  )
}