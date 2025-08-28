import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-primary">
            <span className="text-4xl font-bold text-primary-foreground">DS</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Desenvolvedor
              </span>
              <br />
              <span className="text-foreground">Full Stack</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por criar 
              experiências digitais inovadoras e soluções tecnológicas impactantes.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary">
              <Mail className="w-5 h-5 mr-2" />
              Entrar em Contato
            </Button>
            
            <Button variant="outline" size="lg" className="border-glass hover:bg-glass">
              <Download className="w-5 h-5 mr-2" />
              Baixar Currículo
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-4">
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-glass">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-glass">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-glass">
              <a href="mailto:contato@exemplo.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};