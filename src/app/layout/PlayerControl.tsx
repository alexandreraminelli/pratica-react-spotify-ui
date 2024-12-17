// importação de dependências
import Image, { StaticImageData } from "next/image"
// importação das imagens
import placeholder from "../../../public/playlistCovers/placeholder.jpeg"
// importação de ícones
import { LayoutListIcon, Maximize2Icon, Mic2Icon, PlayIcon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon } from "lucide-react"

/** Componente dos controles de players exibido no canto inferior da tela. */
export default function PlayerControl() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 p-6 flex items-center justify-between">
      {/* Música que está tocando */}
      <MusicInfo music="Music" artist="Artist" />

      {/* Controles */}
      <Control />

      {/* Botões auxiliares */}
      <AuxiliaryButtons />
    </footer>
  )
}

/** Interface dos props do componente `MusicInfo`. */
interface MusicInfoProps {
  /** Capa da música. (opcional) */
  cover?: StaticImageData
  /** Nome da música. */
  music: string
  /** Nome do artista. */
  artist: string
}
/** Componente das informações da música. */
function MusicInfo({ cover = placeholder, music, artist }: MusicInfoProps) {
  /** Tamanho padrão da capa da música. */
  const size: number = 56
  // retorno JSX
  return (
    <div className="flex items-center gap-3">
      {/* Capa da música */}
      <Image src={cover} width={size} height={size} alt="Capa da música" className="rounded" />
      {/* Informações */}
      <div className="flex flex-col">
        {/* Nome da música */}
        <strong className="font-normal">{music}</strong>
        {/* Artista */}
        <span className="text-xs text-zinc-400">{artist}</span>
      </div>
    </div>
  )
}

/** Componente do controle principal. */
function Control() {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Botões de controle */}
      <div className="flex items-center gap-6">
        {/* Botão aleatorizar */}
        <IconButton Icon={ShuffleIcon} />
        {/* Botão anterior */}
        <IconButton Icon={SkipBackIcon} />
        {/* Botão de play */}
        <button className="pd-2 rounded-full bg-white text-lg w-10 h-10 flex items-center justify-center">
          <PlayIcon fill="bg-black" strokeWidth={0} />
        </button>
        {/* Botão próxima */}
        <IconButton Icon={SkipForwardIcon} />
        {/* Botão loop */}
        <IconButton Icon={RepeatIcon} />
      </div>
      {/* Slider */}
      <Slider />
    </div>
  )
}
/** Interface dos props do componente `IconButton`. */
interface IconButtonProps {
  /** Ícone. */
  Icon: React.ComponentType<{
    /** Tamanho do ícone. */
    size: number
    /** Classes CSS personalizadas. (opcional) */
    className?: string
  }>
}
/** Componente do botão de ícone. */
function IconButton({ Icon }: IconButtonProps) {
  return <Icon size={20} className="text-zinc-200 cursor-pointer" />
}

/** Componente do slider. */
function Slider() {
  return (
    <div className="flex items-center gap-2">
      {/* Timer atual */}
      <TimerText timer="0:31" />
      {/* Slider */}
      <div className="h-1 w-96 rounded-full  bg-zinc-600">
        {/* Progresso */}
        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
      </div>
      {/* Timer total */}
      <TimerText timer="2:14" />
    </div>
  )
}
/** Interface dos props do componente `TimerText`. */
interface TimerTextProps {
  /** Valor do time. */
  timer: string
}
/** Componente do texto de timer. */
function TimerText({ timer }: TimerTextProps) {
  return <span className="text-xs text-zinc-400">{timer}</span>
}

/** Componente dos botões auxiliares */
function AuxiliaryButtons() {
  return (
    <aside className="flex items-center gap-3">
      {/* Botão de microfone */}
      <IconButton Icon={Mic2Icon} />
      {/* Botão de playlist */}
      <IconButton Icon={LayoutListIcon} />
      {/* Botão de volume */}
      <div className="flex flex-row items-center">
        {/* Ícone de volume */}
        <IconButton Icon={VolumeIcon} />
        <div className="h-1 w-24 rounded-full  bg-zinc-600">
          {/* Valor */}
          <div className="bg-zinc-200 w-20 h-1 rounded-full"></div>
        </div>
      </div>
      {/*  */}
      <IconButton Icon={Maximize2Icon} />
    </aside>
  )
}
