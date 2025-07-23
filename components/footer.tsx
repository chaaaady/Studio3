import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/navbar/logo";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/40">
      <div className="container-openai">
        <div className="py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Logo />
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Studio d'enregistrement professionnel à Paris, fondé par les frères Emara.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
                    <a href="#" aria-label="Facebook">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
                    <a href="#" aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
                    <a href="#" aria-label="YouTube">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10" asChild>
                    <a href="#" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <div className="space-y-3">
                {["Enregistrement", "Mix & Mastering", "Production", "Direction artistique"].map((service) => (
                  <a 
                    key={service} 
                    href="#services" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Studios */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Nos Studios</h3>
              <div className="space-y-3">
                {["Studio A", "Studio B", "Studio C", "Studio D"].map((studio) => (
                  <a 
                    key={studio} 
                    href="#pricing" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {studio}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+33756812255" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:text-primary" />
                  07 56 81 22 55
                </a>
                <a 
                  href="mailto:studioemara@gmail.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:text-primary" />
                  studioemara@gmail.com
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                  <span>Paris 13e, France</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Studio EMARA. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
