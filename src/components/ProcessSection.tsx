import { Search, Lightbulb, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análise Profunda",
    description: "Mergulhamos no seu negócio: processos, dores, objetivos e KPIs. Entendemos antes de propor."
  },
  {
    icon: Lightbulb,
    title: "Design Estratégico",
    description: "Criamos o agente ideal para seu caso: personalidade, tom, fluxos e integrações necessárias."
  },
  {
    icon: Code2,
    title: "Implementação Técnica",
    description: "Desenvolvimento, integração com seus sistemas e testes rigorosos em ambiente controlado."
  },
  {
    icon: Rocket,
    title: "Lançamento Assistido",
    description: "Go-live planejado com monitoramento em tempo real e suporte total da nossa equipe."
  },
  {
    icon: LineChart,
    title: "Otimização Contínua",
    description: "Análise de dados, ajustes baseados em performance real e novas funcionalidades."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como{" "}
            <span className="text-gradient-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo estruturado em 5 etapas para garantir resultados desde o dia 1
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="relative mb-12 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                      <div className="glass-card p-6 hover-lift">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-primary shadow-md">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center glass-card p-8 max-w-2xl mx-auto">
          <p className="text-lg font-semibold mb-2">Tempo médio de implementação</p>
          <p className="text-4xl font-bold text-gradient-primary mb-2">7-14 dias</p>
          <p className="text-muted-foreground">Do primeiro contato ao agente funcionando em produção</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
