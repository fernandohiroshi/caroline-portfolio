import clsx from 'clsx'
import Link from 'next/link'

import { MobileMenu } from '../nav/mobile/Mobile'

const links = [
  { href: '/#', label: 'Home' },
  { href: '/#perfil', label: 'Perfil' },
  { href: '/#portfolios', label: 'Portfolios' },
  { href: '/#contato', label: 'Contato' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-200/60 shadow backdrop-blur-3xl">
      {/* DESKTOP NAV */}
      <nav className="mx-auto hidden max-w-5xl items-center justify-between py-8 md:px-8 lg:flex">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'duration-300 ease-in-out hover:tracking-widest hover:text-[#720429]',
              {
                // IF NEED MORE CLASSNAME
              },
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* MOBILE NAV */}
      <MobileMenu />
    </header>
  )
}
