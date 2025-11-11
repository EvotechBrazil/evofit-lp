import { Brain, Zap, TrendingUp, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Verdadeiramente Humanizada",
    description: "Não apenas respostas prontas, mas conversas contextuais, empáticas e que se adaptam ao tom do seu cliente. Indistinguível de um humano experiente."
  },
  {
    icon: Zap,
    title: "Integração Total",
    description: "Funciona perfeitamente com WhatsApp, CRM, ERP, sistemas internos. Seus dados trabalham juntos, não em silos."
  },
  {
    icon: TrendingUp,
    title: "Aprendizado Contínuo",
    description: "A IA fica mais inteligente a cada interação. Analisa padrões, detecta oportunidades e otimiza resultados automaticamente."
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Time especializado que garante seus resultados. Não te deixamos sozinho após a implementação."
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-success/10 rounded-full">
            <span className="text-sm font-semibold text-success">A Solução Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Diferença Está na{" "}
            <span className="text-gradient-primary">Execução</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não é só sobre ter IA. É sobre ter a IA certa, configurada do jeito certo, para o seu negócio específico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mock conversation example */}
        <div className="max-w-2xl mx-auto glass-card p-8 animate-scale-in">
          <div className="text-center mb-6">
            <span className="text-sm font-semibold text-muted-foreground">Exemplo de Conversa Real</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">C</span>
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Oi, preciso de ajuda com meu pedido</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Olá! Claro, vou te ajudar com isso. Pode me passar o número do seu pedido?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary-foreground">IA</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">C</span>
              </div>
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">#45892</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Encontrei aqui! Seu pedido está em rota de entrega e deve chegar amanhã até 18h. Quer que eu te mande o link de rastreamento?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary-foreground">IA</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Natural, contextual e eficiente. Exatamente como deveria ser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
