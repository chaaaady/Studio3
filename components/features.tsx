import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Goal,
    title: "Équipements Professionnels",
    description:
      "Nos studios sont équipés du matériel le plus performant pour garantir une qualité d'enregistrement optimale.",
  },
  {
    icon: BookCheck,
    title: "Ingénieurs Expérimentés",
    description:
      "Notre équipe d'ingénieurs du son qualifiés vous accompagne pour obtenir le meilleur rendu sonore.",
  },
  {
    icon: ChartPie,
    title: "Qualité Premium",
    description:
      "Nous garantissons une qualité d'enregistrement professionnelle pour tous vos projets musicaux.",
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé",
    description:
      "Un suivi personnalisé de votre projet, de la prise de son jusqu'au mixage final.",
  },
  {
    icon: FolderSync,
    title: "Flexibilité des Créneaux",
    description:
      "Des créneaux disponibles adaptés à vos besoins, avec une réservation simple et rapide.",
  },
  {
    icon: Zap,
    title: "Résultats Rapides",
    description:
      "Un workflow optimisé pour vous permettre de repartir avec votre projet finalisé rapidement.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Pourquoi choisir nos studios ?
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon />
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
