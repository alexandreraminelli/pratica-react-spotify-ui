// importação dos componentes
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

/** Componente da página inicial do Spotify. */
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Interface */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo principal (músicas) */}
        <Main />
      </div>

      {/* Barra do player */}
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 p-6">footer</footer>
    </div>
  )
}
