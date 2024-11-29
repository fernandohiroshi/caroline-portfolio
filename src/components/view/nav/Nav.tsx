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
    <nav className="flex items-center justify-end px-4 py-4 lg:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-red-800" aria-label="Close menu" />
            ) : (
              <Menu aria-label="Open menu" />
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
