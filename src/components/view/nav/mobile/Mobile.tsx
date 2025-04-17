'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/shadcn/dropdown'

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <nav className="mb-6 flex items-center justify-between px-4 py-4 lg:hidden">
      <Link href="/" title="Home" className="text-xl">
        Portfolio
      </Link>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="text-red-800" aria-label="Fechar menu" />
            ) : (
              <Menu aria-label="Abrir menu" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/#hero">
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <Link href="/#portfolios">
            <DropdownMenuItem>Portfólio</DropdownMenuItem>
          </Link>
          <Link href="/#contato">
            <DropdownMenuItem>Contato</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
