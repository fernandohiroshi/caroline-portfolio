import s1 from '@/images/skills/adobe express logo.png'
import s2 from '@/images/skills/canva logo.png'
import s3 from '@/images/skills/capcut logo.png'
import s4 from '@/images/skills/figma logo.png'
import s5 from '@/images/skills/icone ferramentas.png'
import s6 from '@/images/skills/illustrator logo.png'
import s7 from '@/images/skills/photoshop logo.png'
import s8 from '@/images/skills/premiere logo.png'
import Image from 'next/image'

import Box from '@/components/grid/Box'

export function Skills() {
  const skills = [s1, s2, s3, s4, s5, s6, s7, s8]

  return (
    <Box className="col-span-5 flex border lg:col-span-4">
      <div className="flex h-full w-full items-center justify-center">
        <div className="grid grid-cols-4 gap-2 md:gap-x-8">
          {skills.map((skill, index) => (
            <Image
              key={index}
              src={skill}
              alt={`Skill ${index + 1}`}
              className="h-4 w-4 duration-300 ease-in-out hover:scale-110 md:h-6 md:w-6"
              quality={100}
            />
          ))}
        </div>
      </div>
    </Box>
  )
}
