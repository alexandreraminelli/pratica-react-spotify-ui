// importação de ícones
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react"

/** Componente que agrupa os botões de navegação (avançar e voltar). */
export default function NavButtons() {
  return (
    <div className="flex items-center gap-4">
      {/* Botão de voltar */}
      <NavButton Icon={ChevronLeftIcon} />
      {/* Botão de avançar */}
      <NavButton Icon={ChevronRightIcon} />
    </div>
  )
}

/** Interface dos props do componente `NavButton`. */
interface NavButtonProps {
  /** Ícone do botão. */
  Icon: React.ComponentType
}
/** Botão de voltar e avançar. */
function NavButton({ Icon }: NavButtonProps) {
  return (
    <button className="rounded-full bg-black/40 p-2">
      <Icon />
    </button>
  )
}
