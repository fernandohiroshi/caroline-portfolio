import { getDataPosters } from '@/utils/actions/get-data'
import { PosterProps } from '@/utils/types/posters.type'

import { ParallaxScroll2 } from '@/components/ui/aceternity/parallax-grid-posters'

export async function Posters() {
  const { object }: PosterProps = await getDataPosters()
  const images = object.metadata.posters.map((item) => item.image.url)

  return <ParallaxScroll2 images={images} />
}
