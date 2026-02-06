import { Zap, Unlock, BarChart3, Shield, DollarSign, Target } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Implementação em Dias, Não Meses",
    description: "Enquanto grandes consultorias levam 6 meses, nós entregamos em 7-14 dias. Tempo é dinheiro."
  },
  {
    icon: Unlock,
    title: "Sem Vendor Lock-in",
    description: "Você é dono dos dados e processos. Pode sair quando quiser, mas não vai querer."
  },
  {
    icon: BarChart3,
    title: "Transparência Total nos Resultados",
    description: "Dashboard em tempo real com todas as métricas. Você vê exatamente o que está funcionando."
  },
  {
    icon: DollarSign,
    title: "Custo Previsível e Escalável",
    description: "Modelo de precificação claro. Você escala quando quiser, paga apenas pelo que usa."
  },
  {
    icon: Shield,
    title: "Compliance e Segurança de Dados",
    description: "LGPD compliant, ISO certified, criptografia end-to-end. Seus dados protegidos por padrão."
  },
  {
    icon: Target,
    title: "ROI Mensurável Desde o Dia 1",
    description: "Você vê o retorno do investimento desde a primeira semana. Não é promessa, é garantia."
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Empresas Líderes{" "}
            <span className="text-gradient-primary">Nos Escolhem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não somos mais uma opção. Somos a melhor opção para quem quer resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{differential.title}</h3>
                <p className="text-muted-foreground">{differential.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
