'use client' // Certifique-se de que o componente está marcado como um Client Component

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/shadcn/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/shadcn/carousel'

// Definindo o tipo da prop que CarouselPlugin vai receber
interface CarouselPluginProps {
  fotografias: {
    name: string
    image: { url: string }
  }[]
}

export default function Fotografia({ fotografias }: CarouselPluginProps) {
  // Controlando o autoplay com hooks
  const [isHovered, setIsHovered] = React.useState(false)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: !isHovered }),
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="hidden w-full md:block"
      onMouseEnter={() => setIsHovered(true)} // Evento de mouse
      onMouseLeave={() => setIsHovered(false)} // Evento de mouse
    >
      <CarouselContent>
        {fotografias.map((foto, index) => (
          <CarouselItem key={index}>
            <div className="h-[35rem] p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-2">
                  <Image
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
