'use client'

import { motion, MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
} & MotionProps

const Box = ({ className, ...rest }: Props) => {
  return (
    <motion.section
      className={twMerge('min-h-[6rem] rounded-xl p-2', className)}
      {...rest}
    />
  )
}

export default Box
