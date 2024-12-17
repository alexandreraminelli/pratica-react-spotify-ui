// importação de componentes
import NavButtons from "../components/NavButtons"
import RecommendationGrid from "../components/RecommendationGrid"
import MadeForSection from "../components/MadeForSection"

/** Componente da área principal. */
export default function Main() {
  return (
    <main className="flex-1 p-6">
      {/* Botões de navegação */}
      <NavButtons />

      {/* Mensagem de boas-vindas */}
      <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

      {/* Grid de playlists recomendadas */}
      <RecommendationGrid />

      {/* Seção Made For */}
      <MadeForSection />
    </main>
  )
}
