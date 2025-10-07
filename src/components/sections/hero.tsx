import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {

  return (
    <section id="home" className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/hero_image.png"
          alt="Image of a satellite into deep space"
          priority
          fill
          className="object-cover -z-10"
        />
        {/* Overlay azul semitransparente */}
        <div className="absolute inset-0 bg-eulerblue opacity-50 -z-10" />
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
              {/* 🖼 Imagen antes del h1 */}
        <Image
          src="/images/euler_X-claro_transparente.png"
          alt="Euler X Logo"
          height={163}
          width={461}
          className="animate-fade-in-up  w-auto h-[10rem]"
          style={{ animationFillMode: 'both' }}
          priority
        />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline animate-fade-in-up text-eulertext2" style={{ animationFillMode: 'both',
            textShadow: '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000'
          }}>
            Together we go beyond
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-eulertext2 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            Euler X delivers premier engineering consultancy for enterprise businesses, turning cosmic ambitions into tangible realities.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <Button asChild size="lg" className="bg-transparent border-2 border-eulertext2 text-eulertext2 hover:bg-eulertext2 hover:text-eulerblue transition-colors">
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
