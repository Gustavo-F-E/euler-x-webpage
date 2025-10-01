import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-10 brightness-[0.4]"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline animate-fade-in-up" style={{ animationFillMode: 'both' }}>
            Together we go beyond
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-gray-200 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            Euler X delivers premier engineering consultancy for enterprise businesses, turning cosmic ambitions into tangible realities.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
