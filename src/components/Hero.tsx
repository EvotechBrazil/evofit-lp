import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.jpg";
import evotechLogo from "@/assets/evotech-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-[hsl(220_25%_12%)] to-[hsl(210_40%_15%)]">
      {/* Background Logo Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: `url(${evotechLogo})` }}
      />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={evotechLogo} alt="EVOTECH Automações" className="h-10 md:h-12" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#solucoes" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Soluções</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Como Funciona</a>
            <a href="#casos" className="text-sm font-medium text-white/80 hover:text-accent transition-colors">Casos de Sucesso</a>
            <Button variant="accent" size="sm">Fale Conosco</Button>
          </div>
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/15 rounded-full border border-accent/30">
              <span className="text-sm font-semibold text-accent">IA Humanizada de Verdade</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Agentes de IA que Seus Clientes{" "}
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Pensam Ser Humanos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Não vendemos tecnologia. Entregamos resultados através de IA humanizada que realmente funciona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="accent" size="lg" className="group">
                Agende uma Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group border-white/30 text-white hover:bg-white/10 hover:text-white">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm">
              <div>
                <div className="text-2xl font-bold text-primary-light">750mil+</div>
                <div className="text-white/60">Interações/mês</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-success">94%</div>
                <div className="text-white/60">Taxa de sucesso</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-white/60">Disponibilidade</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={heroImage} 
                alt="Ilustração moderna de agentes de IA humanizados em ação"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
