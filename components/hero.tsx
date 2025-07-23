import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge 
                variant="secondary" 
                className="inline-flex items-center px-4 py-2 rounded-full border-0 bg-primary/10 text-primary font-medium hover:bg-primary/15 transition-colors"
              >
                OFFRE EXCLUSIVE ÉTÉ
              </Badge>
              
              <div className="space-y-4">
                <h1 className="font-bold text-foreground">
                  <span className="text-primary font-bold">30€/h</span>{" "}
                  <br className="hidden sm:block" />
                  pour toute séance
                  <br className="hidden sm:block" />
                  de plus de 4h
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Réservez votre session dans l'un de nos studios équipés et profitez 
                  de l'expertise de nos ingénieurs du son professionnels.
                </p>
                
                <p className="text-sm text-muted-foreground italic font-medium">
                  *Offre valable jusqu'au 31 août
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group relative overflow-hidden h-12 px-8"
                asChild
              >
                <a href="tel:+33756812255" className="flex items-center">
                  Réserver maintenant
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 group"
                asChild
              >
                <a href="#services" className="flex items-center">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Découvrir nos studios
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-card rounded-3xl p-2 shadow-xl">
                  <Image
                    src="/hero-image.jpeg"
                    alt="Studio d'enregistrement EMARA"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
