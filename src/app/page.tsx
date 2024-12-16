// Importação de ícones
import { Home as HomeIcon, Search as SearchIcon, Library as LibraryIcon } from "lucide-react"

/** Componente da página inicial do Spotify. */
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Interface */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo principal (músicas) */}
        <main className="flex-1 p-6">main</main>
      </div>

      {/* Barra do player */}
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 p-6">footer</footer>
    </div>
  )
}

/** Componente da sidebar. */
function Sidebar() {
  /** Lista de links do navbar. */
  const mainNav: NavLinkProps[] = [
    { Icon: HomeIcon, text: "Home" },
    { Icon: SearchIcon, text: "Search" },
    { Icon: LibraryIcon, text: "Your Library" },
  ]
  /** Lista de playlists. */
  const playlistList: NavLinkProps[] = [{ text: "Playlist 1" }, { text: "Playlist 2" }, { text: "Playlist 3" }, { text: "Playlist 4" }, { text: "Playlist 5" }, { text: "Playlist 6" }]

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      {/*  */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Nav principal */}
      <nav className="space-y-5 mt-10">
        {/* Iteração para gerar os links */}
        {mainNav.map((link) => (
          <NavLink Icon={link.Icon} text={link.text} link={link.link} />
        ))}
      </nav>

      {/* Nav de playlists */}
      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        {playlistList.map((playlist) => (
          <NavLink text={playlist.text} className="text-sm text-zinc-400 hover:text-zinc-100" />
        ))}
      </nav>
    </aside>
  )
}

/** Interface dos props do componente `NavLink`. */
interface NavLinkProps {
  /** Ícone do link. (opcional) */
  Icon?: React.ComponentType
  /** Texto do link. */
  text: string
  /** Endereço do link. */
  link?: string
  /** Classes personalizadas. (opcional) */
  className?: string
}

/** Componente do link do navbar. */
function NavLink({ Icon, text, link = "", className }: NavLinkProps) {
  return (
    <a
      href={link} // Endereço
      // Classes CSS:
      className={`flex items-center gap-3 text-sm font-semibold text-zinc-200 ${className}`}
    >
      {Icon && <Icon />} {/* Ícone */}
      {text} {/* Texto */}
    </a>
  )
}
