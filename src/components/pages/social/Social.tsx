import ImageWithSkeleton from '@/components/ImageWithSkeleton';

import { getDataSocialMedia } from '@/utils/actions/get-data';
import { SocialProps } from '@/utils/types/social.type';


export default async function SocialMedia() {
  const { object }: SocialProps = await getDataSocialMedia()
  const { box } = object.metadata

  return (
    <section className="flex flex-col items-center justify-center gap-4 md:gap-40">
      {box.map((socialBox, index) => (
        <div key={index}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex-0">
              <ImageWithSkeleton
                src={socialBox.image_1.imgix_url}
                alt={`Imagem 1 do box ${index + 1}`}
                width={500}
                height={500}
                className="h-[30rem] object-cover"
              />
            </div>

            <div className="flex-0">
              <ImageWithSkeleton
                src={socialBox.image_2.imgix_url}
                alt={`Imagem 2 do box ${index + 1}`}
                width={500}
                height={750}
                className="h-[30rem] object-cover md:h-[33rem]"
              />
            </div>

            <div className="flex-0">
              <ImageWithSkeleton
                src={socialBox.image_3.imgix_url}
                alt={`Imagem 3 do box ${index + 1}`}
                width={500}
                height={700}
                className="h-[30rem] object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
