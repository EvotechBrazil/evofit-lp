import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Alto Volume de Atendimento Repetitivo",
    description: "Sua equipe gasta 70% do tempo respondendo as mesmas perguntas, enquanto casos complexos ficam em espera.",
    impact: "R$ 45mil+ desperdiçados mensalmente"
  },
  {
    icon: Clock,
    title: "Perda de Vendas Fora do Horário",
    description: "42% dos seus leads chegam quando sua equipe está offline. Eles não esperam e vão para a concorrência.",
    impact: "38% de conversão perdida"
  },
  {
    icon: TrendingDown,
    title: "Custos Crescentes com Equipe",
    description: "Contratar, treinar e manter uma equipe de atendimento 24/7 consome cada vez mais do seu orçamento.",
    impact: "Crescimento de 25% ao ano"
  },
  {
    icon: AlertCircle,
    title: "Experiência Inconsistente",
    description: "Cada atendente responde de forma diferente. Qualidade varia e sua marca sofre com falta de padronização.",
    impact: "NPS 35 pontos abaixo do ideal"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Seu Cliente Não Quer Falar com um{" "}
            <span className="text-gradient-accent">Robô</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E você não quer perder dinheiro com processos ineficientes. Reconhece algum desses problemas?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground mb-3">{problem.description}</p>
                    <div className="inline-block px-3 py-1 bg-destructive/10 rounded-full">
                      <span className="text-sm font-semibold text-destructive">{problem.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Cada dia sem uma solução real é dinheiro deixado na mesa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
