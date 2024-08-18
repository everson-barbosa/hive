import { NavLink } from "react-router-dom";

export function AsideMenu() {
  return (
    <aside className="flex flex-col p-6 w-80 bg-background border-r min-h-screen">
      <h3>Aside menu</h3>

      <div className="my-4">
        <ul className="flex flex-col gap-2">
          <li className="text-sm">
            <NavLink to='/' className='block hover:bg-muted px-2 py-1 rounded'>
              Dashboard
            </NavLink>
          </li>

          <li  className="text-sm">
            <NavLink to='/articles' className='block hover:bg-muted px-2 py-1 rounded'>
              Artigos
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}