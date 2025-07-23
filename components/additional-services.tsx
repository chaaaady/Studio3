import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Clock, Star, Lock, Users, Palette } from "lucide-react";

const AdditionalServices = () => {
  const services = [
    {
      icon: Lock,
      title: "LOCK OUT",
      description: "Location exclusive de tous nos studios",
      features: ["Accès complet aux 4 studios", "Équipements professionnels", "Flexibilité totale"],
      popular: false,
      action: "Demander un devis"
    },
    {
      icon: Users,
      title: "SÉMINAIRES",
      description: "Réservation des studios et beatmakers",
      features: ["Réalisation d'albums", "Plusieurs beatmakers certifiés à dispo", "Plusieurs ingénieurs à dispo"],
      popular: false,
      action: "Demander un devis"
    },
    {
      icon: Mic,
      title: "FORFAIT SANS INGÉ",
      description: "Location studio sans ingénieur du son",
      features: ["Studio équipé", "Autonomie complète", "Tarifs réduits"],
      popular: true,
      action: "Découvrir les tarifs"
    },
    {
      icon: Palette,
      title: "PRODUCTION ARTISTIQUE",
      description: "Production musicale complète",
      features: ["Composition", "Arrangements", "Direction artistique"],
      popular: false,
      action: "Demander un devis"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">AUTRES PRESTATIONS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos services complémentaires pour tous vos projets musicaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
              <CardHeader className="text-center pb-4">
                {service.popular && (
                  <Badge className="mx-auto mb-2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    POPULAIRE
                  </Badge>
                )}
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4" variant={service.popular ? "default" : "outline"} asChild>
                  {service.action === "Découvrir les tarifs" ? (
                    <a href="/tarifs">
                      {service.action}
                    </a>
                  ) : (
                    <a href="tel:+33756812255">
                      {service.action}
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card border rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">📞 Besoin d&apos;un devis personnalisé ?</h3>
            <p className="text-muted-foreground mb-6">
              Chaque projet est unique. Contactez-nous pour un devis sur mesure adapté à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+33756812255">
                  <Clock className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:studioemara@gmail.com">
                  Demander un devis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices; 