import { Code2, Cpu, Workflow, MessageSquare, Database, Shield } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    name: "OpenAI GPT-4 & Claude",
    description: "Os modelos de linguagem mais avançados do mercado para conversas naturais"
  },
  {
    icon: Workflow,
    name: "n8n & Make",
    description: "Automação poderosa que conecta todos os seus sistemas perfeitamente"
  },
  {
    icon: MessageSquare,
    name: "Evolution API",
    description: "Integração nativa com WhatsApp para alcance máximo"
  },
  {
    icon: Database,
    name: "Supabase & PostgreSQL",
    description: "Banco de dados robusto e escalável para todo seu histórico"
  },
  {
    icon: Code2,
    name: "TypeScript & Python",
    description: "Stack moderna e confiável para customizações ilimitadas"
  },
  {
    icon: Shield,
    name: "Azure & AWS",
    description: "Infraestrutura enterprise com segurança e compliance"
  }
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-[hsl(220_25%_6%)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary-light">Stack Tecnológica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Construído com as{" "}
            <span className="text-gradient-accent">Melhores Ferramentas</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Usamos apenas tecnologias comprovadas e líderes de mercado. Nada experimental, nada arriscado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg p-6 hover-lift animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-4">
                  <Icon className="w-8 h-8 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-white/60">{tech.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 rounded-full">
            <Shield className="w-5 h-5 text-success" />
            <span className="font-semibold text-success">100% Seguro • LGPD Compliant • ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
