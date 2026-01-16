import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <>
       <aside>
         ASIDE
       </aside>

       <main>
           <Outlet />
       </main>
    </>
  )
}
