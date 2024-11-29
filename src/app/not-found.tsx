'use client'

import Image from 'next/image'

import notFoundAnimation from '../../public/not-found.gif'

export default function NotFound() {
  return (
    <div className="flex h-[80vh] animate-pulse flex-col items-center justify-center">
      <Image
        width={100}
        height={100}
        src={notFoundAnimation}
        alt="Animation"
        className="opacity-80 md:w-[10rem]"
        unoptimized
      />
      <h1 className="mt-4 text-center text-xl md:text-2xl">
        Essa página não existe.
      </h1>
    </div>
  )
}
