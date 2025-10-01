import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Grid3x3, Network, Thermometer } from "lucide-react";

const services = [
  {
    icon: <Thermometer className="h-10 w-10 text-primary" />,
    title: "Thermal Analysis",
    description: "Ensuring spacecraft and components operate within safe temperature limits in the harsh environment of space.",
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: "Structural Analysis",
    description: "Verifying the integrity of structures under launch and operational loads to guarantee mission success.",
  },
  {
    icon: <Activity className="h-10 w-10 text-primary" />,
    title: "Dynamic Analysis",
    description: "Simulating vibrations, acoustics, and shock events to protect sensitive equipment and ensure stability.",
  },
  {
    icon: <Grid3x3 className="h-10 w-10 text-primary" />,
    title: "Finite Element Simulations",
    description: "Utilizing advanced computational models to predict complex physical behaviors with high accuracy.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Comprehensive Engineering for Space Systems
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a full suite of specialized engineering services to address the unique challenges of the space sector.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="p-0 pb-4">
                {service.icon}
                <CardTitle className="pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
