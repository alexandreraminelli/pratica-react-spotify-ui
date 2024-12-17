// Importação de componentes
import Image, { StaticImageData } from "next/image"
// importação de imagens
import placeholder from "../../../public/playlistCovers/placeholder.jpeg"

/** Componente da seção "Feito Para". */
export default function MadeForSection() {
  // Lista de objetos com os
  const suggestions: SuggestionBlockProps[] = [
    { name: "Daily Mix 1", artist: "Artista 1" },
    { name: "Daily Mix 2", artist: "Artista 2" },
    { name: "Daily Mix 3", artist: "Artista 3" },
    { name: "Daily Mix 4", artist: "Artista 4" },
    { name: "Daily Mix 5", artist: "Artista 5" },
  ]

  // retorno JSX
  return (
    <>
      {/* Título */}
      <h2 className="font-semibold text-2xl mt-10">Made for Alexandre Raminelli</h2>

      {/* Lista "Feito para" */}
      <div className="grid grid-cols-8 gap-4 mt-4">
        {/* Iteração */}
        {suggestions.map((block, index) => (
          <SuggestionBlock key={index} name={block.name} artist={block.artist} />
        ))}
      </div>
    </>
  )
}

/** Interface dos props do componente `SuggestionBlock`. */
interface SuggestionBlockProps {
  /** Capa do albúm. (opcional) */
  cover?: StaticImageData
  /** Nome do álbum/playlist. */
  name: string
  /** Artista. */
  artist: string
}

/** Componente do bloco de sugestão. */
function SuggestionBlock({ cover = placeholder, name, artist }: SuggestionBlockProps) {
  // retorno JSX
  return (
    <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
      {/* Capa do album */}
      <Image src={cover} className="w-full" alt="Capa do álbum." />
      {/* Nome */}
      <strong className="font-semibold">{name}</strong>
      {/* Artista */}
      <span className="text-xs text-zinc-500">{artist}</span>
    </a>
  )
}
