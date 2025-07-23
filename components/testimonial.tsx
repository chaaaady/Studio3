"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marwane Touati",
    date: "il y a 3 mois",
    content: "Emara Studio est un excellent studio d&apos;enregistrement ! L&apos;équipement est de haute qualité, et l&apos;acoustique est impeccable. L&apos;équipe est super professionnelle et à l&apos;écoute.",
    initials: "MT"
  },
  {
    name: "ZXP 9",
    date: "il y a une semaine",
    content: "Un studio très professionnel géré par des gens très sympathiques et serviables! Je vous le conseille vivement!",
    initials: "ZX"
  },
  {
    name: "Clement Grison",
    date: "il y a 5 mois",
    content: "Très bien accueilli par yanis et par le reste du studio, j&apos;ai pu bien posé durant ma session. Je recommande !",
    initials: "CG"
  },
  {
    name: "Zebra",
    date: "il y a 5 mois",
    content: "Studio plus que professionnel, un accompagnement personnalisé, efficace et très pédagogue. Rempli de beatmaker exceptionnels. On a pu composer, enregistrer et mixer dans la soirée je suis ressorti avec mon son quasiment terminé. Un régale",
    initials: "ZE"
  },
  {
    name: "Sam H",
    date: "il y a 5 mois",
    content: "Un studio digne de ce nom ! Des compositeurs incroyables ! Quel régal de faire de la musique avec le talentueux Trent 700 ! Une expérience perspicace et convergente ! Merci encore je vous remercie respectueusement !",
    initials: "SH"
  }
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">AVIS CLIENTS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience chez Studio EMARA
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border shadow-lg bg-card">
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-center gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary/10 text-primary font-medium text-lg">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-green-600 text-green-600" />
            <span className="font-medium text-lg">Note moyenne : 5/5 sur Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
