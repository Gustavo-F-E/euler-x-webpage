'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Rocket, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import Image from "next/image";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-eulerblue backdrop-blur text-eulertext">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <Image
            src="/images/euler_X-claro_transparente.png"
            alt="Euler X Logo"
            width={266}
            height={94}
            className="h-8 w-auto ml-2"
            priority
          />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors text-eulertext hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-2 md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="#home" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                              <Image
            src="/images/euler_X-oscuro_icono.png"
            alt="Euler X Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
                    <span className="font-bold">Euler X</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col items-start gap-4 p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
