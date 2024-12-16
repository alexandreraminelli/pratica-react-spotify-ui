import Image from "next/image"

export default function Home() {
  return (
    /*
     * - `h-screen`: ocupar toda a altura da tela (`height: 100%`)
     * - `flex flex-col`: layout flex em coluna
     */
    <div className="h-screen flex flex-col">
      {/* Interface */}
      {/*
       * - `flex`: flexbox
       */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {/*
         * - `w-`: largura (width)
         */}
        <aside className="w-64 bg-zinc-950">sidebar</aside>

        {/* Conteúdo principal (músicas) */}
        {/*
         * - `flex-1`: ocupar o espaço restante dentro da flexbox
         */}
        <main className="flex-1">main</main>
      </div>

      {/* Barra do player */}
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6">footer</footer>
    </div>
  )
}
