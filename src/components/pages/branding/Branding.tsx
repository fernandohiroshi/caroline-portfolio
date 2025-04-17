import { getDataBranding } from '@/utils/actions/get-data'
import { BrandingProps } from '@/utils/types/branding.type'
import Image from 'next/image'

import Box from '@/components/grid/Box'
import ImageWithSkeleton from '@/components/ImageWithSkeleton'

type BrandingBoxProps = {
  imagens: Array<{
    url: string
    className: string
    height: string
  }>
}

function BrandingBox({ imagens }: BrandingBoxProps) {
  return (
    <div className="grid grid-cols-12 gap-2 lg:gap-4">
      {imagens.map((image, index) => (
        <Box
          key={index}
          className={`${image.className} rounded-xl p-0 shadow-xl`}
        >
          <ImageWithSkeleton
            src={image.url}
            width={300}
            height={300}
            quality={100}
            alt={`Image ${index + 1}`}
            containerClassName={`${image.height} overflow-hidden rounded-xl`}
            className={`w-full object-cover ${image.height} rounded-xl object-center duration-300 ease-in-out hover:scale-110`}
          />
        </Box>
      ))}
    </div>
  )
}
export async function Branding() {
  const { object }: BrandingProps = await getDataBranding()
  const { branding_box_1, branding_box_2, branding_box_3, branding_box_4 } =
    object.metadata

  const createBoxData = (boxData: any) => {
    return [
      {
        url: boxData.imagem_1.url,
        className: 'col-span-12 lg:col-span-8',
        height: 'h-[13rem]',
      },
      {
        url: boxData.imagem_2.url,
        className: 'col-span-6 lg:col-span-4',
        height: 'h-full',
      },
      {
        url: boxData.imagem_3.url,
        className: 'col-span-6 lg:col-span-4 lg:row-span-2',
        height: 'h-full',
      },
      {
        url: boxData.imagem_4.url,
        className: 'col-span-6 lg:col-span-3',
        height: 'h-[13rem]',
      },
      {
        url: boxData.imagem_5.url,
        className: 'col-span-6 lg:col-span-5',
        height: 'h-[13rem]',
      },
      {
        url: boxData.imagem_6.url,
        className: 'col-span-12 lg:col-span-8',
        height: 'h-[13rem]',
      },
    ]
  }

  return (
    <section>
      <div className="flex flex-col gap-24">
        <BrandingBox imagens={createBoxData(branding_box_1)} />
        <BrandingBox imagens={createBoxData(branding_box_2)} />
        <BrandingBox imagens={createBoxData(branding_box_3)} />
        <BrandingBox imagens={createBoxData(branding_box_4)} />
      </div>
    </section>
  )
}
