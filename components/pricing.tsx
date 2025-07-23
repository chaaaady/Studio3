import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Square, Music } from "lucide-react";

const Pricing = () => {
  const studios = [
    {
      name: "STUDIO A",
      price: "40€",
      period: "/heure",
      description: "Studio professionnel de 40 m² pour vos enregistrements premium",
      features: [
        "Enregistrement avec ingénieur du son",
        "Accès complet aux équipements pro",
        "Direction artistique incluse",
        "Pré-mix de qualité studio"
      ],
      capacity: "10 personnes",
      size: "40 m²",
      minimum: "2h minimum",
      popular: false
    },
    {
      name: "STUDIO B",
      price: "40€",
      period: "/heure",
      description: "Studio spacieux et équipé pour tous vos projets musicaux",
      features: [
        "Enregistrement professionnel complet",
        "Équipements de dernière génération",
        "Ingénieur du son expérimenté",
        "Pré-mix inclus dans le service"
      ],
      capacity: "10 personnes",
      size: "40 m²",
      minimum: "2h minimum",
      popular: true
    },
    {
      name: "STUDIO C",
      price: "35€",
      period: "/heure",
      description: "Studio compact et professionnel pour projets intimistes",
      features: [
        "Enregistrement haute qualité",
        "Setup professionnel complet",
        "Accompagnement personnalisé",
        "Pré-mix inclus"
      ],
      capacity: "4 personnes",
      size: "25 m²",
      minimum: "2h minimum",
      popular: false
    },
    {
      name: "STUDIO D",
      price: "20€",
      period: "/heure",
      description: "Studio beatmaking dédié à la création musicale",
      features: [
        "Setup beatmaking professionnel",
        "Bibliothèque de samples premium",
        "Instruments virtuels inclus",
        "Enregistrement voix disponible"
      ],
      capacity: "2 personnes",
      size: "15 m²",
      minimum: "5h minimum",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-openai">
      <div className="container-openai">
        <div className="text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-foreground">NOS STUDIOS</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choisissez le studio qui correspond parfaitement à vos besoins et à votre budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studios.map((studio, index) => (
              <div 
                key={index} 
                className={`relative card-openai ${studio.popular ? 'ring-2 ring-primary/20 border-primary/30' : ''} hover:-translate-y-1`}
              >
                {studio.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1">
                      POPULAIRE
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{studio.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">{studio.price}</span>
                      <span className="text-muted-foreground">{studio.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{studio.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <Users className="w-5 h-5 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">{studio.capacity}</p>
                    </div>
                    <div className="space-y-1">
                      <Square className="w-5 h-5 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">{studio.size}</p>
                    </div>
                    <div className="space-y-1">
                      <Music className="w-5 h-5 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">{studio.minimum}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {studio.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${studio.popular ? 'btn-openai-primary' : 'btn-openai-secondary'}`}
                    asChild
                  >
                    <a href="tel:+33756812255">
                      Réserver {studio.name}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Offre spéciale été</h3>
              <p className="text-lg text-muted-foreground">
                <span className="text-primary font-bold">30€/h</span> pour toute réservation de plus de 4 heures
              </p>
              <p className="text-sm text-muted-foreground italic">*Valable jusqu'au 31 août</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
