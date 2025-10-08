"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function JobsSection() {
  return (
    <section id="jobs" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-6 py-3 text-2xl font-bold mb-12">Jobs</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Work with us
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-12">
            Explore career-defining opportunities at Euler-X Aerospace.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {/* Job 1 */}
            <CarouselItem className="basis-[70%] md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">Senior Thermal Engineer</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">We are looking for an experienced thermal engineer to join our team and work on cutting-edge satellite projects.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.linkedin.com/pulse/we-looking-structural-engineer-space-systems-eulerxaerospace-7ncwf/?trackingId=q%2F1OxyeNQ6OjM%2Bt019n8HA%3D%3D" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            {/* Job 2 */}
            <CarouselItem className="basis-[70%] md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">Space Systems Engineer</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">Join us to design and develop the next generation of space systems. Experience with NewSpace is a plus.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.linkedin.com/pulse/we-looking-thermal-control-engineer-space-systems-eulerxaerospace-stthf/?trackingId=2M04xaBqSq6SAB6kgx3iDg%3D%3D" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            {/* Job 3 */}
            <CarouselItem className="basis-[70%] md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">Mechanical Engineer</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">We are seeking a skilled Mechanical Engineer to contribute to the structural design and analysis of our satellite components.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.linkedin.com/company/eulerxaerospace/posts/?feedView=all" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            {/* Job 4 */}
            <CarouselItem className="basis-[70%] md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full">
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">Design Engineer</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">Join our design team to create innovative solutions for space hardware, from concept to detailed drawings.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://www.linkedin.com/company/eulerxaerospace/posts/?feedView=all" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
}