import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [monthlyInteractions, setMonthlyInteractions] = useState(5000);
  const [costPerInteraction, setCostPerInteraction] = useState(15);
  const [conversionRate, setConversionRate] = useState(2);

  const currentMonthlyCost = monthlyInteractions * costPerInteraction;
  const aiMonthlyCost = monthlyInteractions * 0.5;
  const monthlySavings = currentMonthlyCost - aiMonthlyCost;
  const annualSavings = monthlySavings * 12;

  const currentConversions = (monthlyInteractions * conversionRate) / 100;
  const improvedConversionRate = conversionRate * 1.5;
  const newConversions = (monthlyInteractions * improvedConversionRate) / 100;
  const additionalConversions = newConversions - currentConversions;
  const revenueIncrease = additionalConversions * 200;

  const totalMonthlyBenefit = monthlySavings + revenueIncrease;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-success/10 rounded-full">
            <span className="text-sm font-semibold text-success">Calculadora Interativa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quanto Você Pode{" "}
            <span className="text-gradient-primary">Economizar e Ganhar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o impacto financeiro real da automação inteligente no seu negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="interactions" className="text-base font-semibold mb-2 block">
                  Atendimentos mensais
                </Label>
                <Input
                  id="interactions"
                  type="number"
                  value={monthlyInteractions}
                  onChange={(e) => setMonthlyInteractions(Number(e.target.value))}
                  className="text-lg h-12"
                />
              </div>

              <div>
                <Label htmlFor="cost" className="text-base font-semibold mb-2 block">
                  Custo médio por atendimento (R$)
                </Label>
                <Input
                  id="cost"
                  type="number"
                  value={costPerInteraction}
                  onChange={(e) => setCostPerInteraction(Number(e.target.value))}
                  className="text-lg h-12"
                />
              </div>

              <div>
                <Label htmlFor="conversion" className="text-base font-semibold mb-2 block">
                  Taxa de conversão atual (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="text-lg h-12"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-success to-success-light p-6 rounded-xl text-success-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-sm font-semibold opacity-90">Economia Mensal</span>
                </div>
                <div className="text-4xl font-bold mb-1">
                  R$ {monthlySavings.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm opacity-90">
                  R$ {annualSavings.toLocaleString('pt-BR')} por ano
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-xl text-primary-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold opacity-90">Aumento de Receita</span>
                </div>
                <div className="text-4xl font-bold mb-1">
                  R$ {revenueIncrease.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm opacity-90">
                  +{additionalConversions.toFixed(0)} conversões/mês
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-dark to-primary p-6 rounded-xl text-primary-foreground">
                <div className="text-sm font-semibold opacity-90 mb-2">Benefício Total Mensal</div>
                <div className="text-5xl font-bold">
                  R$ {totalMonthlyBenefit.toLocaleString('pt-BR')}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              Esses números são estimativas conservadoras baseadas em casos reais dos nossos clientes.
            </p>
            <Button variant="hero" size="lg">
              Agende uma Análise Personalizada
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
