import { TrendingUp, Clock, DollarSign } from "lucide-react";

const cases = [
  {
    sector: "E-commerce de Moda",
    challenge: "Alto volume de dúvidas repetitivas sobre tamanhos, prazos e trocas. Equipe sobrecarregada e taxa de conversão baixa.",
    solution: "Agente especializado integrado ao WhatsApp e sistema de pedidos, com acesso a estoque em tempo real.",
    results: [
      { icon: TrendingUp, metric: "+156%", label: "Taxa de conversão" },
      { icon: Clock, metric: "18min → 42s", label: "Tempo de resposta" },
      { icon: DollarSign, metric: "R$ 87mil", label: "Economia mensal" }
    ]
  },
  {
    sector: "Clínica Médica",
    challenge: "Agendamentos por telefone geravam erros e cancelamentos. Recepção não dava conta do volume de ligações.",
    solution: "Assistente de agendamento automatizado com integração ao sistema de gestão da clínica e confirmação via SMS.",
    results: [
      { icon: TrendingUp, metric: "+89%", label: "Agendamentos online" },
      { icon: Clock, metric: "92%", label: "Redução de no-shows" },
      { icon: DollarSign, metric: "R$ 34mil", label: "Aumento de receita" }
    ]
  },
  {
    sector: "SaaS B2B",
    challenge: "Leads chegavam fora do horário comercial e não eram qualificados adequadamente antes de ir para vendas.",
    solution: "Agente de pré-qualificação que entende necessidades, agenda demos e passa apenas leads quentes para o time.",
    results: [
      { icon: TrendingUp, metric: "+210%", label: "Leads qualificados" },
      { icon: Clock, metric: "24/7", label: "Cobertura total" },
      { icon: DollarSign, metric: "+67%", label: "Taxa de fechamento" }
    ]
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-[hsl(220_25%_6%)] text-white" id="casos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-success/10 rounded-full">
            <span className="text-sm font-semibold text-success">Casos de Sucesso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que{" "}
            <span className="text-gradient-primary">Falam por Si</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Números reais de clientes reais. Sem exageros, sem promessas vazias.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full mb-3">
                  <span className="text-sm font-semibold text-primary-light">{caseStudy.sector}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Desafio</h3>
                <p className="text-white/70 mb-4">{caseStudy.challenge}</p>
                <h3 className="text-xl font-bold mb-2">Solução</h3>
                <p className="text-white/70">{caseStudy.solution}</p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm font-semibold text-white/50 mb-4">RESULTADOS</p>
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-light mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary-light mb-1">{result.metric}</div>
                        <div className="text-sm text-white/60">{result.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
