import Image, { StaticImageData } from "next/image" // componente que otimiza imagens
// Importação de ícones
import { Play as PlayIcon } from "lucide-react"
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
    <a href="#" className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group">
      <Image src={image} alt="Capa do álbum" height={size} width={size} /> {/* Imagem */}
      <strong>{name}</strong> {/* Texto do álbum */}
      <PlayButton /> {/* Botão de play */}
    </a>
  )
}

/** Componente do botão de play. */
function PlayButton() {
  return (
    <button className="pd-2 rounded-full bg-green-400 text-lg ml-auto mr-8 w-12 h-12 flex items-center justify-center invisible group-hover:visible">
      <PlayIcon fill="bg-black" strokeWidth={0} />
    </button>
  )
}
