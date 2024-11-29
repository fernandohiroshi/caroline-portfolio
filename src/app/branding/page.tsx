import { Branding } from '@/components/pages/branding/Branding'

export default function BrandingPage() {
  return (
    <main
      className="mx-auto max-w-5xl scroll-mt-40 px-4 lg:py-16"
      id="branding"
    >
      <h1 className="mb-8 text-2xl lg:text-3xl">Branding</h1>
      <Branding />
    </main>
  )
}
