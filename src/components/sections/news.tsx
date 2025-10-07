"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-6 py-3 text-2xl font-bold mb-12">News</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Latest from Euler X in the Space Sector
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stay informed with our curated feed of the most important news and developments in the space industry.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Noticia 1 */}
          <article className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="line-clamp-2">Euler-X in Space Tech Expo Europe</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-4">Are you ready to come with us to Bremen? See you from November 18th to 20th.</p>
            </CardContent>
            <CardFooter>
              <Link href="https://www.spacetechexpo-europe.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </article>
          {/* Noticia 2 */}
          <article className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="line-clamp-2">Euler-X Aerospace Video</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-4">Challenges and common missteps in New Space companies are presented.</p>
            </CardContent>
            <CardFooter>
              <Link href="https://www.youtube.com/watch?v=yPy3Ze1AtzY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </article>
          {/* Noticia 3 */}
          <article className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm transition-transform hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="line-clamp-2">Follow us on LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-4">Technical publications from us.</p>
            </CardContent>
            <CardFooter>
              <Link href="https://www.linkedin.com/company/eulerxaerospace/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:text-accent/80 underline-offset-4 hover:underline">
                More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </article>
        </div>
      </div>
    </section>
  );
}