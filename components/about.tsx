import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="section-openai">
      <div className="container-openai">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-foreground">
              QUI SOMMES-NOUS ?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="card-openai text-center space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Les studios <span className="font-semibold text-primary">EMARA</span> ont été fondés par les frères Emara (
                  <span className="font-semibold text-foreground">Trent 700</span> et{" "}
                  <span className="font-semibold text-foreground">Chady Emara</span>), 
                  producteurs multi-certifiés.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Forts de leur expertise, ils ont marqué l'industrie musicale rap par leurs 
                  collaborations avec de nombreux artistes réputés :
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Booba", "Ninho", "Damso", "Gunna", "Jul", "Niska", 
                "SCH", "Naps", "SDM", "PNL", "Djadja & Dinaz", "Kaaris", 
                "Kalash", "Bramsito", "Dosseh", "RK", "Gambino", "Maes"
              ].map((artist, index) => (
                <div 
                  key={index} 
                  className="group bg-card border border-border/50 rounded-xl p-4 text-center hover:shadow-lg hover:border-border transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {artist}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-primary font-medium">
                🎵 Plus de 10 ans d'expérience dans l'industrie musicale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 