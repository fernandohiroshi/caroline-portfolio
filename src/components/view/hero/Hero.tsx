interface HeroProps {
  titulo: string
  subtitulo: string
  className?: string
}

export function Hero({ titulo, subtitulo, className }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative mt-8 hidden scroll-mt-40 flex-col items-start justify-center md:flex lg:-mt-16 lg:h-screen lg:items-center ${className}`}
    >
      <div className="z-40 text-center">
        <h1 className="mb-2 animate-pulse text-3xl font-medium tracking-wider text-black lg:text-8xl">
          {titulo}
        </h1>

        <p className="max-w-xl text-xs text-neutral-900 md:text-sm lg:text-center">
          {subtitulo}
        </p>
      </div>
    </section>
  )
}
