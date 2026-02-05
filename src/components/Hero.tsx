import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.jpg";
import evotechLogo from "@/assets/evotech-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Navigation with Logo */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={evotechLogo} alt="EVOTECH Automações" className="h-12 md:h-14" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#solucoes" className="text-sm font-medium hover:text-primary transition-colors">Soluções</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
            <a href="#casos" className="text-sm font-medium hover:text-primary transition-colors">Casos de Sucesso</a>
            <Button variant="hero" size="sm">Fale Conosco</Button>
          </div>
        </div>
      </nav>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">IA Humanizada de Verdade</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Agentes de IA que Seus Clientes{" "}
              <span className="text-gradient-primary">Pensam Ser Humanos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Não vendemos tecnologia. Entregamos resultados através de IA humanizada que realmente funciona.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="group">
                Agende uma Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Ver Como Funciona
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">750mil+</div>
                <div className="text-muted-foreground">Interações/mês</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-success">94%</div>
                <div className="text-muted-foreground">Taxa de sucesso</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-muted-foreground">Disponibilidade</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Ilustração moderna de agentes de IA humanizados em ação"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 glass-card p-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
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
