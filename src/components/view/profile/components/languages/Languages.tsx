import Box from '@/components/grid/Box'

interface LanguageProgressBarProps {
  language: string
  progress: number
  color: string
}

const LanguageProgressBar = ({
  language,
  progress,
  color,
}: LanguageProgressBarProps) => {
  return (
    <div className="inline-flex w-full items-center justify-between gap-2">
      <p className="text-sm">{language}</p>
      <div className="relative w-full max-w-[55%] rounded-sm bg-neutral-300 p-2 shadow md:max-w-[70%]">
        <div
          className={`absolute left-0 top-0 rounded-sm p-2 ${color} animate-pulse`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default function Languages() {
  return (
    <Box className="col-span-7 flex items-center border lg:col-span-4">
      <div className="flex w-full flex-col gap-4 py-4">
        <LanguageProgressBar
          language="Inglês"
          progress={40}
          color="bg-gradient-to-r from-transparent to-pink-400"
        />
        <LanguageProgressBar
          language="Espanhol"
          progress={70}
          color="bg-gradient-to-r from-transparent to-cyan-400"
        />
      </div>
    </Box>
  )
}
