import Nav from "./components/nav"
import Search from "./components/search"
import "./components/header.scss"

function App() {

  return (
    <main>
      <header className="header min-h-[500px] p-10">
        <Nav />
          <h1 className="text-[5rem] mt-15 text-gray-800 font-extrabold text-center">
             Trouvé votre <em className="text-white">'film'</em> préféré, <br /> sans effort!.
          </h1>

          <Search />
      </header>
    </main>
  )
}

export default App
