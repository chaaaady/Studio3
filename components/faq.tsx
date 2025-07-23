import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quelle est la capacité d'accueil des studios ?",
      answer: "Le studio A peut accueillir jusqu'à 10 personnes, le studio B, 10 personnes et le C, 4 personnes."
    },
    {
      question: "Le studio est-il fumeur ?",
      answer: "Oui, un purificateur d'air est installé pour garantir une bonne ventilation de la pièce."
    },
    {
      question: "Est ce que l'alcool est autorisé ?",
      answer: "Non, la consomation d'alcool est formellement interdite dans le studio."
    },
    {
      question: "Où se trouve le studio ?",
      answer: "Le studio est idéalement situé au 50 Quai des Carrières, 94220 Charenton-le-Pont, juste en face de l'autoroute A4. Il se trouve à seulement 5 minutes du périphérique Porte de Bercy, à 4 minutes des quais de Seine, et à 8 minutes à pied de la station Charenton-Écoles."
    },
    {
      question: "Peut-on réserver une session pour le jour même ?",
      answer: "Non, nous ne pouvons accepter que des réservations effectuées au moins 24 heures à l'avance, en raison de contraintes logistiques."
    },
    {
      question: "Comment réserver un studio ?",
      answer: "Vous pouvez réserver en nous appelant au 07 56 81 22 55 ou en nous contactant par email à studioemara@gmail.com. Nous vous recommandons de réserver au moins 24h à l'avance."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nos studios sont ouverts du lundi au dimanche, de 14h à 4h du matin. Des créneaux spéciaux peuvent être organisés sur demande."
    },
    {
      question: "Faut-il apporter son propre matériel ?",
      answer: "Non, tous nos studios sont entièrement équipés avec du matériel professionnel. Cependant, vous pouvez apporter vos propres instruments si vous le souhaitez."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">QUESTIONS FRÉQUENTES</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos studios
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
