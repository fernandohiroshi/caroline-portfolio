import Image from 'next/image'

import Box from '@/components/grid/Box'

import { Experiences } from './components/experience/Experience'
import Languages from './components/languages/Languages'
import { Skills } from './components/skills/Skills'

interface ProfileProps {
  titulo: string
  bio: string
  foto: string
  email: string
  telefone: string
}

export function Profile({ titulo, bio, foto }: ProfileProps) {
  return (
    <section
      className="h-full scroll-mt-40 items-center justify-center lg:my-24 lg:flex"
      id="perfil"
    >
      <div className="grid grid-cols-12 gap-2 lg:gap-4">
        <Box className="col-span-7 flex flex-col items-start justify-evenly lg:col-span-8 lg:justify-normal">
          <h1 className="text-lg font-semibold md:text-3xl lg:mb-4">
            {titulo}
          </h1>
          <p className="rounded-xl text-justify text-xs text-neutral-700 lg:bg-neutral-200/30 lg:p-4 lg:text-sm">
            {bio}
          </p>
        </Box>

        {/* PROFILE IMAGE */}
        <Box className="col-span-5 overflow-hidden rounded-xl p-0 lg:col-span-4 lg:row-span-2">
          <Image
            alt={titulo}
            src={foto}
            width={500}
            height={500}
            quality={100}
            className="z-40 h-full w-full rounded-xl object-cover object-center duration-500 ease-in-out hover:scale-125"
          />
        </Box>

        <Experiences />
        <Skills />
        <Languages />
      </div>
    </section>
  )
}
