import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Demonstração gratuita de 30 minutos",
  "Análise personalizada do seu caso",
  "Cálculo detalhado de ROI",
  "Sem compromisso ou contratos longos"
];

const FinalCTA = () => {
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

          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 text-foreground max-w-2xl mx-auto mb-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-left">
                  <Label htmlFor="name" className="mb-2 block">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" className="h-12" />
                </div>
                <div className="text-left">
                  <Label htmlFor="company" className="mb-2 block">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" className="h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-left">
                  <Label htmlFor="email" className="mb-2 block">Email Corporativo</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="h-12" />
                </div>
                <div className="text-left">
                  <Label htmlFor="phone" className="mb-2 block">WhatsApp</Label>
                  <Input id="phone" type="tel" placeholder="(00) 00000-0000" className="h-12" />
                </div>
              </div>

              <Button variant="accent" size="lg" className="w-full text-lg h-14">
                Agendar Demonstração Gratuita
                <ArrowRight className="ml-2" />
              </Button>
            </form>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-white/90 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
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
