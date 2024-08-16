import { NavLink } from "react-router-dom";

export function AsideMenu() {
  return (
    <aside className="flex flex-col p-6 w-80 bg-background border-r min-h-screen">
      <h3>Aside menu</h3>

      <ul>
        <li>
          <NavLink to='/'>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}