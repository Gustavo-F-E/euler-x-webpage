import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-6 py-3 text-2xl font-bold mb-12">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Comprehensive Engineering for Space Systems
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a full suite of specialized engineering services to address the unique challenges of the space sector.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2">
              {/* Servicio 1 */}
              <article id="service-consulting" className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <Image
                  src="/icons/consulting-blue.svg"
                  alt="Consulting and NewSpace Expertise Icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-primary mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Consulting & NewSpace Expertise</h3>
                <p className="text-muted-foreground">
                  We combine deep engineering knowledge with strategic consulting to help organizations thrive in the NewSpace era.</p>
                <p className="text-muted-foreground">Our experience spans agencies, established players, and startups, enabling us to provide R&D consulting, TRL advancement, and MVP development with a clear systems vision.</p>
                <p className="text-muted-foreground">Through our international network, we offer privileged market insights to position your projects globally.</p>
              </article>
              {/* Servicio 2 */}
              <article id="service-collaboration" className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <Image
                  src="/icons/networking2-blue.svg"
                  alt="Consulting and NewSpace Expertise Icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-primary mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Collaboration Models</h3>
                <p className="text-muted-foreground">
                  Every organization has different structures, timelines, and needs — that’s why we provide flexible collaboration models.
                </p>
                <p className="text-muted-foreground">
                  We can support teams through mentoring, transferring know-how and elevating engineering capabilities; act as a team extension, embedding our specialists directly into your projects; or offer technical advisory for critical design decisions.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to adapt seamlessly to your workflows and accelerate progress.
                </p>
              </article>
              {/* Servicio 3 */}
              <article id="service-engineering-profiles" className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <Image
                  src="/icons/engineer-config-svgrepo-com 1-blue.svg"
                  alt="Consulting and NewSpace Expertise Icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-primary mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Engineering Profiles</h3>
                <p className="text-muted-foreground">
                  Our team brings together a diverse range of engineering expertise across the full spectrum of space system development.
                </p>
                <p className="text-muted-foreground">This includes systems and requirements engineering (PDR/CDR), mechanical and structural design and analysis, and thermal engineering — from FEA thermo-elastic models to orbital and electronic thermal control.</p>
                <p className="text-muted-foreground">Our multidisciplinary approach ensures coherent, high-quality technical solutions.</p>
              </article>
              {/* Servicio 4 */}
              <article id="service-thermal-mechanical" className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-transform hover:-translate-y-2 hover:shadow-xl">
                <Image
                  src="/icons/satellite-svgrepo-com-blue.svg"
                  alt="Consulting and NewSpace Expertise Icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 text-primary mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Thermal–Mechanical Systems Engineering</h3>
                <p className="text-muted-foreground">
                  We offer comprehensive thermal and structural engineering for space systems, supporting the entire development cycle.
                </p>
                <p className="text-muted-foreground">Our work spans from concept and detailed design to advanced analysis, including FEA, thermo-elastic modeling, and orbital thermal simulations.</p>
                <p className="text-muted-foreground">This integrated approach ensures that every subsystem meets mission requirements with precision and efficiency.</p>
              </article>
        </div>
        <div id="euler-x-proposal" className="flex justify-center py-12 ">
          <Image
            src="/images/euler-x-proposal.png"
            alt="Euler-X Proposal"
            width={1604}
            height={1026}
            className="w-[90%] md:w-[70%] lg:w-[60%] rounded-xl object-contain shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
          />
        </div>

    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center mb-12">
        Global Presence
      </h2>

      <div className="space-y-6">
        {/* 🇦🇷 Argentina */}
        <article className="flex items-center space-x-4 p-4 md:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src="/images/argentina-map.png"
              alt="Map of Argentina with flag pin"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-1">
              ARGENTINA (Headquarter)
            </p>
            <p className="text-base md:text-lg text-blue-600 font-medium">
              LATAM&apos;s Top Space Talent and R&amp;D
            </p>
          </div>
        </article>

        {/* 🇪🇺 Europe */}
        <article className="flex items-center space-x-4 p-4 md:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src="/images/UK-map.png"
              alt="Map of UK with flag pin"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-1">
              EUROPE REGION
            </p>
            <p className="text-base md:text-lg text-blue-600 font-medium">
              UK Incorporation
            </p>
          </div>
        </article>

        {/* 🇺🇸 North America */}
        <article className="flex items-center space-x-4 p-4 md:p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-2 duration-300">
          <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src="/images/USA-map.png"
              alt="Map of USA with flag pin"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-1">
              NORTH AMERICA REGION
            </p>
            <p className="text-base md:text-lg text-blue-600 font-medium">
              US Incorporation
            </p>
          </div>
        </article>
      </div>
    </section>
      </div>
    </section>
  );
}
