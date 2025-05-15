import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/types/home.type'
import Link from 'next/link'

import Box from '@/components/grid/Box'
import ImageWithSkeleton from '@/components/ImageWithSkeleton'

interface PortfolioData {
  title: string
  imageUrl: string
  pageUrl: string
}

export async function Portfolio() {
  const { object }: HomeProps = await getDataHome()
  const { portfolios } = object.metadata

  const portfoliosData: PortfolioData[] = [
    {
      title: 'Branding',
      imageUrl: portfolios.branding.url,
      pageUrl: '/branding',
    },
    {
      title: 'Social Media',
      imageUrl: portfolios.social.url,
      pageUrl: '/social',
    },
    {
      title: 'Fotografia',
      imageUrl: portfolios.fotografia.url,
      pageUrl: '/fotografia',
    },
    {
      title: 'Posters',
      imageUrl: portfolios.posters.url,
      pageUrl: '/posters',
    },
  ]

  return (
    <section
      className="mb-24 mt-8 scroll-mt-40 items-center justify-center px-2 lg:mt-0 lg:flex lg:h-full lg:flex-col lg:px-4"
      id="portfolios"
    >
      <div>
        <h2 className="mb-2 text-xl lg:text-3xl">Portfolios</h2>
        <div className="mt-4 grid w-full grid-cols-12 gap-4">
          {portfoliosData.map((p, index) => (
            <Box
              key={index}
              className="col-span-6 overflow-hidden p-2 shadow backdrop-blur-2xl duration-300 ease-in-out hover:bg-[#720429]/10 lg:col-span-6"
            >
              <Link href={p.pageUrl} title={p.title}>
                <div className="overflow-hidden rounded-xl duration-300 hover:scale-95">
                  <ImageWithSkeleton
                    src={p.imageUrl}
                    alt={`Imagem representando o portfolio de ${p.title}`}
                    width={500}
                    height={500}
                    quality={100}
                    className="max-h-[8rem] min-h-[8rem] w-full rounded-xl object-cover md:max-h-[16rem] md:min-h-[16rem]"
                  />
                </div>

                <p className="mt-3 text-xs md:text-sm">{p.title}</p>
              </Link>
            </Box>
          ))}
        </div>
      </div>
    </section>
  )
}
