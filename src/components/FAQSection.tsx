import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Quanto tempo leva a implementação?",
    answer: "De 7 a 14 dias do primeiro contato ao agente funcionando em produção. Isso inclui análise, configuração, testes e treinamento da sua equipe. Empresas maiores podem levar até 21 dias."
  },
  {
    question: "E se o cliente perceber que é IA?",
    answer: "Nossos agentes são indistinguíveis de humanos em 94% dos casos. Mas mais importante: somos transparentes quando necessário. Se o cliente pede explicitamente, confirmamos e mantemos a conversa natural. A experiência continua excelente."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você tem acesso direto a um especialista dedicado via WhatsApp e email. Respondemos em menos de 2 horas durante horário comercial. Para clientes enterprise, oferecemos suporte 24/7 e SLA garantido."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Depende do volume e complexidade. Projetos iniciam a partir de R$ 3.500/mês com setup incluído. Você paga pelo que usa, sem surpresas. Agende uma call para um orçamento personalizado."
  },
  {
    question: "Posso integrar com meus sistemas atuais?",
    answer: "Sim. Trabalhamos com APIs abertas e integramos com praticamente qualquer sistema: CRMs (RD Station, Pipedrive, HubSpot), ERPs, WhatsApp Business, plataformas de e-commerce, bancos de dados próprios, etc."
  },
  {
    question: "E se eu não gostar depois de implementado?",
    answer: "Temos garantia de 30 dias. Se você não estiver satisfeito com os resultados, devolvemos 100% do investimento. Sem letras miúdas. Mas isso raramente acontece - nossa taxa de retenção é de 96%."
  },
  {
    question: "Vocês treinam minha equipe?",
    answer: "Sim, incluímos treinamento completo para sua equipe operar e monitorar o agente. Também fornecemos documentação detalhada e vídeos de apoio. Seu time fica 100% autônomo."
  },
  {
    question: "Como garantem a segurança dos dados?",
    answer: "Somos LGPD compliant, usamos criptografia end-to-end, hospedagem em servidores certificados ISO 27001, e você mantém propriedade total dos seus dados. Auditorias disponíveis sob demanda."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas{" "}
            <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respostas diretas para as dúvidas mais comuns. Sem rodeios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card px-6 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <Button variant="outline" size="lg">
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
