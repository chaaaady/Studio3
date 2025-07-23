import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Music, Headphones, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "ENREGISTREMENT",
      description: "Enregistrement professionnel avec nos ingénieurs du son expérimentés et notre matériel de pointe"
    },
    {
      icon: Music,
      title: "MIX & MASTERING",
      description: "Mixage et mastering de qualité studio pour donner vie à vos créations musicales"
    },
    {
      icon: Headphones,
      title: "PRODUCTION",
      description: "Production musicale complète avec nos beatmakers certifiés et équipements professionnels"
    },
    {
      icon: User,
      title: "DIRECTION ARTISTIQUE",
      description: "Accompagnement personnalisé et conseils d'experts pour développer votre projet artistique"
    }
  ];

  return (
    <section id="services" className="section-openai bg-muted/30">
      <div className="container-openai">
        <div className="text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-foreground">NOS SERVICES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services professionnels pour tous vos projets musicaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group card-openai text-center hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm"
              >
                <div className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl">
              <p className="text-lg text-center text-primary font-medium">
                ✨ Tous nos services incluent l'expertise de nos ingénieurs certifiés et l'accès à nos équipements professionnels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 