import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/types/home.type'

import { Hero } from '@/components/view/hero/Hero'
import { Portfolio } from '@/components/view/portfolio/Portfolio'
import { Profile } from '@/components/view/profile/Profile'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const { hero, perfil, contact } = object.metadata

  return (
    <main className="relative w-full scroll-mt-40">
      <div className="mx-auto mb-4 h-full max-w-5xl px-4">
        <Hero titulo={hero.titulo} subtitulo={hero.subtitulo} />
        <Profile
          titulo={perfil.titulo}
          bio={perfil.bio}
          foto={perfil.foto.url}
          telefone={contact.telefone}
          email={contact.email}
        />
        <Portfolio />
      </div>

      {/* HERO SECTION VIDEO */}
      <video
        src="https://cdn.cosmicjs.com/7fc86410-957b-11ef-8deb-db65bd2584e1-WhatsApp-Video-2024-10-28-at-10.57.18.mp4"
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 hidden h-screen w-full object-cover opacity-30 lg:block"
      />
    </main>
  )
}
