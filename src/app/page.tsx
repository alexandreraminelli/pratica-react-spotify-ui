// importação dos componentes
import Sidebar from "./layout/Sidebar"
import Main from "./layout/Main"
import PlayerControl from "./layout/PlayerControl"

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
      <PlayerControl />
    </div>
  )
}
