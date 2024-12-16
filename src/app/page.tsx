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
  const navList: NavLinkProps[] = [
    { Icon: HomeIcon, text: "Home" },
    { Icon: SearchIcon, text: "Search" },
    { Icon: LibraryIcon, text: "Your Library" },
  ]

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      {/* Barra de navegação */}
      <nav className="space-y-5">
        {/* Iteração para gerar os links */}
        {navList.map((link) => (
          <NavLink Icon={link.Icon} text={link.text} link={link.link} />
        ))}
      </nav>
    </aside>
  )
}

/** Interface dos props do componente `NavLink`. */
interface NavLinkProps {
  /** Ícone do link. */
  Icon: React.ComponentType
  /** Texto do link. */
  text: string
  /** Endereço do link. */
  link?: string
}

/** Componente do link do navbar. */
function NavLink({ Icon, text, link = "" }: NavLinkProps) {
  return (
    <a
      href={link} // Endereço
      // Classes CSS:
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      <Icon /> {/* Ícone */}
      {text} {/* Texto */}
    </a>
  )
}
