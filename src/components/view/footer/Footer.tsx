import Image from 'next/image'
import { BiLogoGmail } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { PiLinktreeLogo } from 'react-icons/pi'

import qrcode from '@/components/images/qrcode.jpeg'

interface ContactLinkProps {
  href: string
  icon: JSX.Element
  label: string
}

function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm duration-300 ease-in-out hover:text-[#720429] hover:underline"
    >
      {icon}
      {label}
    </a>
  )
}

export async function Footer() {
  return (
    <>
      <footer
        className="mx-auto max-w-5xl justify-between rounded-3xl bg-neutral-200/30 p-8 lg:flex"
        id="contato"
      >
        <div>
          <h2 className="mb-2 text-2xl lg:text-3xl">Contato</h2>
          <p className="mb-8 text-xs">
            Está interessado em iniciar um novo projeto?{' '}
            <br className="hidden lg:block" />
            Sinta-se à vontade para mandar mensagem.{' '}
            <br className="hidden lg:block" />
            Entrarei em contato em menos de 24 horas.
          </p>
          <div className="flex flex-col gap-4">
            <ContactLink
              href="mailto:carolinesouzadesign@gmail.com"
              icon={<BiLogoGmail size={20} />}
              label="Gmail"
            />
            <ContactLink
              href="https://www.instagram.com/design.csouza/"
              icon={<FaInstagram size={20} />}
              label="Instagram"
            />
            <ContactLink
              href="https://linktr.ee/carolinesouzadesign"
              icon={<PiLinktreeLogo size={20} />}
              label="Linktree"
            />
            <ContactLink
              href="https://wa.me/5545999563668"
              icon={<FaWhatsapp size={20} />}
              label="Whatsapp"
            />
          </div>
        </div>

        {/* QRCODE */}
        <div className="hidden flex-col justify-end lg:flex">
          <Image
            src={qrcode}
            alt="Linktree"
            width={250}
            height={250}
            quality={100}
            className="h-[12rem] w-full rounded-lg object-cover shadow-lg"
          />
          <p className="mt-4 text-center">Escaneie também!</p>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <p className="my-12 text-center text-xs">
        © 2024 Todos os direitos reservados. <br /> Este site foi desenvolvido
        por{' '}
        <a
          href="https://konbinicode.com/en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          Konbini Code
        </a>
        .
      </p>
    </>
  )
}
