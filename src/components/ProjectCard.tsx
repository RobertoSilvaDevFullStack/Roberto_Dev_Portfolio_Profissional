import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export const ProjectCard = ({ id, title, description, image, githubUrl, liveUrl, technologies }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-glass border-glass backdrop-blur-glass hover-lift hover:shadow-glow-secondary transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`Screenshot do projeto ${title}`}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-30 transition-all duration-500" />
        
        {/* Overlay com informação adicional */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <p className="text-sm font-medium">Estudo de Caso</p>
            <p className="text-xs mt-1">Clique para explorar</p>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all duration-200 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 border-glass hover:bg-glass hover:text-primary hover-lift group/btn"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2 group-hover/btn:animate-bounce-subtle" />
              Código
            </a>
          </Button>
          
          {liveUrl && (
            <Button
              size="sm"
              asChild
              className="flex-1 bg-gradient-primary hover:shadow-glow-primary hover-glow group/btn"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce-subtle" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};