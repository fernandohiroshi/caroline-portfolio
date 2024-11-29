import { Posters } from '@/components/pages/posters/Posters'

export default function PostersPage() {
  return (
    <main
      className="mx-auto h-full max-w-5xl scroll-mt-40 px-4 md:py-16"
      id="posters"
    >
      <h1 className="text-2xl lg:text-3xl">Posters</h1>
      <Posters />
    </main>
  )
}
