import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLeadModal } from "@/components/LeadCaptureModal";

const benefits = [
  "Demonstração gratuita de 30 minutos",
  "Análise personalizada do seu caso",
  "Cálculo detalhado de ROI",
  "Sem compromisso ou contratos longos"
];

const FinalCTA = () => {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(210_85%_35%)] via-[hsl(210_70%_30%)] to-[hsl(220_25%_12%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Pronto para Transformar Seu Atendimento?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Agende uma demonstração sem compromisso e veja na prática como podemos 
            transformar seu atendimento em uma máquina de resultados.
          </p>

          <Button variant="hero" size="lg" className="text-lg h-14 px-12 mb-12" onClick={openLeadModal}>
            Agendar Demonstração Gratuita
            <ArrowRight className="ml-2" />
          </Button>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white/90 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-primary-light flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-sm opacity-75">
            <strong>Garantia de tranquilidade:</strong> Sem vendedores insistentes. Sem contratos armadilha. 
            Apenas uma conversa honesta sobre como podemos ajudar seu negócio a crescer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
