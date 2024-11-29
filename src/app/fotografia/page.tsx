import { getDataFoto } from '@/utils/actions/get-data'
import { FotografiaProps } from '@/utils/types/photography.type'

import Fotografia from '@/components/pages/fotografia/Fotografia'
import { FotografiaMobile } from '@/components/pages/fotografia/FotografiaMobile'

export default async function FotografiaPage() {
  const { object }: FotografiaProps = await getDataFoto()
  const { fotografia } = object.metadata

  return (
    <main
      className="mx-auto h-full w-full max-w-5xl scroll-mt-40 px-4 md:py-16"
      id="fotografia"
    >
      <h1 className="mb-4 text-3xl">Fotografias</h1>

      <Fotografia fotografias={fotografia} />
      <FotografiaMobile />
    </main>
  )
}
