import { getDataUxui } from '@/utils/actions/get-data'
import { UXUIProps } from '@/utils/types/uxui.type'
import Image from 'next/image'

import { Timeline } from '@/components/ui/aceternity/timeline'

export async function Uxui() {
  const { object }: UXUIProps = await getDataUxui()
  const { box_1, box_2, box_3 } = object.metadata

  const data = [
    {
      title: box_1.titulo,
      description: box_1.descricao,
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:hidden md:text-sm">
            {box_1.descricao}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[box_1.img_1, box_1.img_2, box_1.img_3, box_1.img_4].map(
              (img, index) => (
                <Image
                  key={index}
                  src={img.url}
                  alt={box_1.titulo}
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              ),
            )}
          </div>
        </div>
      ),
    },
    {
      title: box_2.titulo,
      description: box_2.descricao,
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:hidden md:text-sm">
            {box_2.descricao}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[box_2.img_1, box_2.img_2, box_2.img_3, box_2.img_4].map(
              (img, index) => (
                <Image
                  key={index}
                  src={img.url}
                  alt={box_2.titulo}
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              ),
            )}
          </div>
        </div>
      ),
    },
    {
      title: box_3.titulo,
      description: box_3.descricao,
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:hidden md:text-sm">
            {box_3.descricao}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[box_3.img_1, box_3.img_2, box_3.img_3, box_3.img_4].map(
              (img, index) => (
                <Image
                  key={index}
                  src={img.url}
                  alt={box_3.titulo}
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              ),
            )}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="w-full overflow-y-hidden">
      <Timeline data={data} />
    </section>
  )
}
