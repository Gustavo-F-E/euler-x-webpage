import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="w-full px-4 md:px-6">
          <div className="w-full space-y-4">
            <div className="w-full flex justify-center">
              <div className="inline-block rounded-lg bg-secondary px-6 py-3 text-2xl font-bold  mb-12">
                About Us
              </div>
            </div>
            <article id="about-mission" className="flex flex-col lg:flex-row w-full items-center h-max w-full">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12">
                  Forging the Future of Space Exploration
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Euler X, our mission is to provide cutting-edge engineering solutions that empower humanity's expansion into the cosmos. We are a team of dedicated experts passionate about solving the complex challenges of space technology, from initial concept to mission deployment.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe in a future where space is accessible and sustainable. Our consultancy services are the building blocks for that future, ensuring every project we touch is a stride forward for the industry.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/images/euler_aboutus1.png"
                  alt="descripcion euler"
                  width={1400}
                  height={826}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full p-12"
                />
              </div>
            </article>
            <article id="about-expertise" className="flex flex-col lg:flex-row w-full items-center gap-6 h-max pt-48">
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                <Image
                  src="/images/aboutus1.png"
                  alt="aboutus1"
                  width={422}
                  height={348}
                  className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] aspect-video overflow-hidden rounded-xl object-contain object-center transition-transform hover:-translate-y-2"
                />
                <Image
                  src="/images/aboutus2.png"
                  alt="aboutus2"
                  width={400}
                  height={305}
                  className="mx-auto w-[90%] md:w-[80%] lg:w-[70%] aspect-video overflow-hidden rounded-xl object-contain object-center transition-transform hover:-translate-y-2"
                />
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12">
                  What We ARE
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EulerX Aerospace specializes in end-to-end engineering consulting. We are a fast-paced firm focused on the NewSpace paradigm, delivering expertise in:
                </p>
                  <ul className="list-disc pl-8 space-y-2 text-lg text-eulerblue font-semibold pt-12">
                    <li className="transition-colors hover:text-eulertext2">Thermal Engineering</li>
                    <li className="transition-colors hover:text-eulertext2">Mechanical Engineering</li>
                    <li className="transition-colors hover:text-eulertext2">Space Systems Engineering</li>
                  </ul>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12 mt-12">
                  Our Strategic Advantage
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With 20+ years of experience in the space industry, we bring a proven track record—we’ve done it many times. Our strength lies in the seamless blend of Tradition meets NewSpace: we know which rules matter and how to apply engineering rigor with agile execution. We maintain a sharp focus on delivery and efficiency, ensuring minimal overhead for maximum project impact.
                </p>
              </div>

            </article>
            <article id="about-clients" className="flex flex-col lg:flex-row w-full items-center gap-6 h-max pt-48">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12">
                  Trusted by Industry Leaders
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our commitment to excellence has earned the trust of leading organizations around the globe, including:
                </p>
                <ul  className="list-disc pl-8 space-y-2 text-lg text-eulerblue font-semibold pt-12">
                    <li  className="transition-colors hover:text-eulertext2">Redwire Space NV (BELGIUM)</li>
                    <li  className="transition-colors hover:text-eulertext2">UK Space Agency (United Kingdom)</li>
                    <li  className="transition-colors hover:text-eulertext2">INVAP (ARGENTINA)</li>
                  </ul>
              </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                <Image
                  src="/images/redwire.png"
                  alt="Redwire"
                  width={543}
                  height={160}
                  className="mx-auto w-[50%] md:w-[40%]  lg:w-[40%] aspect-video overflow-hidden rounded-xl object-contain object-center transition-transform hover:-translate-y-2"
                />
                <Image
                  src="/images/UKspace.png"
                  alt="UK space agency"
                  width={346}
                  height={352}
                  className="mx-auto w-[50%] md:w-[40%] lg:w-[40%] aspect-video overflow-hidden rounded-xl object-contain object-center transition-transform hover:-translate-y-2"
                />
                <Image
                  src="/images/INVAP.png"
                  alt="invap"
                  width={366}
                  height={66}
                  className="mx-auto w-[40%] md:w-[30%]  lg:w-[30%] aspect-video overflow-hidden rounded-xl object-contain object-center transition-transform hover:-translate-y-2"
                />
              </div>
            </article>
            <article id="about-founder" className="flex flex-col lg:flex-row w-full items-center gap-6 h-max pt-48">
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                    <div className="max-w-6xl mx-auto my-12 p-4">
                      
                      {/* 1. Imagen del Equipo de Satélites (con inclinación para estilo) */}
                      <div className="flex justify-center mb-10">
                        <div className="relative transform -rotate-1 border-4 border-white overflow-hidden transition-transform hover:-translate-y-2">
                          <Image
                            src="/images/team-satellite-cleanroom.png" // Reemplaza con la ruta a la imagen del equipo
                            alt="EulerX Team and Collaborators in Satellite Cleanroom"
                            width={744}
                            height={507}
                            
                            className="w-full h-auto"
                          />
                        </div>
                      </div>

                      {/* 2. Logos de los Proyectos de Satélites */}
                      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 p-4">
                        
                        {/* Logo 1: SAC-D/Aquarius */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-37 lg:h-37 flex items-center justify-center p-1 shadow-2xl rounded-lg bg-white transition-transform hover:-translate-y-2">
                          <Image
                            src="/images/sacd-aquarius-logo.png"
                            alt="SAC-D/Aquarius Satellite Logo"
                            width={199}
                            height={205}
                            
                          />
                        </div>

                        {/* Logo 2: ARSAT-1 */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-37 lg:h-37 flex items-center justify-center p-1 shadow-2xl rounded-lg bg-white transition-transform hover:-translate-y-2">
                          <Image
                            src="/images/arsat-1-logo.png"
                            alt="ARSAT-1 Satellite Logo"
                            width={229}
                            height={207}
                            
                          />
                        </div>

                        {/* Logo 3: ARSAT-2 */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-37 lg:h-37 flex items-center justify-center p-1 shadow-2xl rounded-lg bg-white transition-transform hover:-translate-y-2">
                          <Image
                            src="/images/arsat-2-logo.png" 
                            alt="ARSAT-2 Satellite Logo"
                            width={222}
                            height={204}
                            
                          />
                        </div>
                        
                        {/* Logo 4: SAOCOM */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-37 lg:h-37 flex items-center justify-center p-1 shadow-2xl rounded-lg bg-white transition-transform hover:-translate-y-2">
                          <Image
                            src="/images/saocom-logo.png"
                            alt="SAOCOM Satellite Logo"
                            width={209}
                            height={208}
                            
                          />
                        </div>
                      </div>
                    </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mb-12">
                  About the founder
                </h2>
                <div id="fundador" className="flex flex-col lg:flex-row items-start lg:items-center p-8 bg-white rounded-lg shadow-md max-w-6xl mx-auto my-8 transition-transform hover:-translate-y-2">
                  {/* Sección principal del fundador y logos */}
                  <div className="flex flex-col lg:flex-row items-start w-full">
                    {/* Contenedor de la imagen y el texto */}
                    <div className="flex-1 flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-start">
                      {/* Imagen del fundador */}
                      <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 mb-4 md:mb-0 md:mr-6 rounded-full overflow-hidden shadow-lg border-2 border-gray-200">
                        <Image
                          src="/images/LucasCubau.png" // Reemplaza con la ruta a la imagen de Lucas Cubau
                          alt="Lucas Cubau"
                          width={224} // Ancho para md:w-56 (56 * 4 = 224px)
                          height={224} // Alto para md:h-56 (56 * 4 = 224px)
                          
                          className="rounded-full" // Asegura que la imagen dentro del div también sea redonda
                        />
                      </div>

                      {/* Texto del fundador */}
                      <div className="flex-1 text-gray-800 text-lg leading-relaxed">
                        <p className="mb-2">
                          <span className="font-bold text-eulerblue">Lucas Cubau</span> brings two decades of deep experience in the
                          space industry. His career is rooted in Thermal Engineering and Space Systems,
                          which includes a past role as Head of Dept. at <span className="italic font-semibold text-eulertext px-1 rounded">INVAP (Satellite Thermal
                          Engineering)</span>. His philosophy is simple: "Combining engineering rigor with agile execution"
                          to propel our clients beyond current limitations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </article>
          </div>
      </div>
    </section>
  );
}
