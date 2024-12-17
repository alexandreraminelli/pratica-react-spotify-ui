import Image, { StaticImageData } from "next/image" // componente que otimiza imagens
// Importação de imagens
import placeholder from "../../../public/playlistCovers/placeholder.jpeg"

/** Componente do grid de recomendações. */
export default function RecommendationGrid() {
  /** Lista de recomendações. */
  const recommendationList: RecommendedPlaylistBlockProps[] = [{ name: "Recomendação 1" }, { name: "Recomendação 2" }, { name: "Recomendação 3" }, { name: "Recomendação 4" }, { name: "Recomendação 5" }, { name: "Recomendação 6" }]

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {/* Iteração */}
      {recommendationList.map((item, index) => (
        <RecommendedPlaylistBlock key={index} name={item.name} />
      ))}
    </div>
  )
}

/** Interface dos props do componente `RecommendedPlaylistBlock`. */
interface RecommendedPlaylistBlockProps {
  /** Imagem da playlist. */
  image?: StaticImageData
  /** Nome da playlist. */
  name: string
}
/** Componente de bloco de playlist recomendada.  */
function RecommendedPlaylistBlock({ image = placeholder, name }: RecommendedPlaylistBlockProps) {
  /** Tamanho padrão da imagem. */
  const size: number = 114
  // Retorno JSX
  return (
    <a href="#" className="bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
      <Image src={image} alt="Capa do álbum" height={size} width={size} /> {/* Imagem */}
      <strong>{name}</strong> {/* Texto do álbum */}
    </a>
  )
}
