import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Forging the Future of Space Exploration
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Euler X, our mission is to provide cutting-edge engineering solutions that empower humanity's expansion into the cosmos. We are a team of dedicated experts passionate about solving the complex challenges of space technology, from initial concept to mission deployment.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe in a future where space is accessible and sustainable. Our consultancy services are the building blocks for that future, ensuring every project we touch is a stride forward for the industry.
            </p>
          </div>
          {aboutImage && (
            <div className="flex justify-center">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
