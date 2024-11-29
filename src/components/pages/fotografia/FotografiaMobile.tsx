import { getDataFoto } from '@/utils/actions/get-data'
import { FotografiaProps } from '@/utils/types/photography.type'

import { ParallaxScroll } from '@/components/ui/aceternity/parallax-grid-fotografia'

export async function FotografiaMobile() {
  const { object }: FotografiaProps = await getDataFoto()

  const images = object.metadata.fotografia.map((item) => item.image.url)

  return <ParallaxScroll images={images} className="md:hidden" />
}
