import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vamos Trabalhar Juntos?
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato para conversarmos sobre como posso ajudar em seus projetos.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary"
              asChild
            >
              <a href="mailto:contato@exemplo.com">
                <Mail className="w-5 h-5 mr-2" />
                Entrar em Contato
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
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
          
          <div className="pt-8 border-t border-glass">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Desenvolvido com <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> por Seu Nome
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2024 Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};