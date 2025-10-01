"use client";
import { useState } from "react";
import Noticia from "../noticia";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const initialNews = [
  {
    title: "Lanzamiento exitoso de satélite nacional",
    summary: "El nuevo satélite de comunicaciones fue lanzado con éxito y ya está en órbita.",
    link: "https://ejemplo.com/noticia1",
  },
  {
    title: "Startup aeroespacial recibe inversión récord",
    summary: "Una startup local ha recibido una inversión histórica para desarrollar cohetes reutilizables.",
    link: "https://ejemplo.com/noticia2",
  },
  {
    title: "Descubrimiento de agua en Marte",
    summary: "Científicos confirman la presencia de agua en el subsuelo marciano, abriendo nuevas posibilidades.",
    link: "https://ejemplo.com/noticia3",
  },
];

export default function NewsSection() {
  const [news, setNews] = useState(initialNews);

  // Aquí podrías agregar hooks personalizados para manejar noticias, por ejemplo:
  // const { news, addNews, removeNews } = useNoticiasPersonalizadas();

  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">News</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Latest from the Space Sector
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stay informed with our curated feed of the most important news and developments in the space industry.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article, index) => (
            <Noticia key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}