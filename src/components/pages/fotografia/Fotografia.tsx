'use client'

import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/shadcn/card'
import ImageWithSkeleton from '@/components/ImageWithSkeleton'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/shadcn/carousel'

interface CarouselPluginProps {
  fotografias: {
    name: string
    image: { url: string }
  }[]
}

export default function Fotografia({ fotografias }: CarouselPluginProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: !isHovered }),
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="hidden w-full md:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselContent>
        {fotografias.map((foto, index) => (
          <CarouselItem key={index}>
            <div className="h-[35rem] p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <ImageWithSkeleton
                    src={foto.image.url}
                    alt={foto.name}
                    width={1000}
                    height={1000}
                    className="h-full w-full rounded-sm object-cover object-center"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
