'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

type ImageWithSkeletonProps = ImageProps & {
  containerClassName?: string
}

export default function ImageWithSkeleton({
  containerClassName = '',
  className = '',
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleImageLoad = () => {
    // Simula atraso para visualização do skeleton
    setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 800ms de atraso
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 z-0 animate-pulse rounded-xl bg-gray-300" />
      )}

      <Image
        {...props}
        onLoad={handleImageLoad}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        alt='Loading...'
      />
    </div>
  )
}
