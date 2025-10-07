import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full  px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-6 py-3 text-2xl font-bold mb-12">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">Bariloche, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(US) +1 (754) 294 9708</p>
                  <p className="text-muted-foreground">(AR) +54 9 294 4293147</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">lucas.cubau@eulerxaerospace.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/lucas-Cubau</p>
                  <p className="text-muted-foreground">linkedin.com/company/eulerxaerospace</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
