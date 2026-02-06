import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import evotechLogo from "@/assets/evotech-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-[hsl(220_25%_12%)] to-[hsl(210_40%_15%)]">
      {/* Background Logo Watermark - Centered */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <img 
          src={evotechLogo} 
          alt="" 
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gradient-primary">EVOTECH</span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#solucoes" className="text-sm font-medium text-white/80 hover:text-primary-light transition-colors">Soluções</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/80 hover:text-primary-light transition-colors">Como Funciona</a>
            <a href="#casos" className="text-sm font-medium text-white/80 hover:text-primary-light transition-colors">Casos de Sucesso</a>
            <Button variant="hero" size="sm">Fale Conosco</Button>
          </div>
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/15 rounded-full border border-primary/30">
            <span className="text-sm font-semibold text-primary-light">IA Humanizada de Verdade</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Agentes de IA que Seus Clientes
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gradient-primary">Pensam Ser Humanos</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
            Não vendemos tecnologia. Entregamos resultados através de IA humanizada que realmente funciona.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Agende uma Demonstração
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-8 md:gap-12 justify-center text-sm">
            <div>
              <div className="text-2xl font-bold text-primary-light">750mil+</div>
              <div className="text-white/60">Interações/mês</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">94%</div>
              <div className="text-white/60">Taxa de sucesso</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-light">24/7</div>
              <div className="text-white/60">Disponibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
