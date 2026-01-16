import { Outlet } from "react-router";
import Nav from "../components/nav";

export default function AppLayout() {
  return (
       <>
            <Nav />

            <main>
                <Outlet />
            </main>
       </>
  )
}
