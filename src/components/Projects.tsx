import { ProjectCard } from "./ProjectCard";
import { useGitHubRepositories } from "@/hooks/useGitHubRepositories";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, RefreshCw, AlertCircle } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

// Projetos estáticos como fallback
const fallbackProjects = [
  {
    id: 1,
    title: "Dashboard Analytics",
    description: "Painel de controle com visualização de dados em tempo real, desenvolvido para resolver desafios de monitoramento empresarial com interface moderna e métricas de performance.",
    image: projectDashboard,
    githubUrl: "https://github.com/RobertoSilvaDevFullStack/dashboard-project",
    liveUrl: "https://dashboard-demo.vercel.app",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce que resolve problemas de vendas online com carrinho inteligente, sistema de pagamentos seguro e painel administrativo robusto.",
    image: projectEcommerce,
    githubUrl: "https://github.com/RobertoSilvaDevFullStack/ecommerce-project",
    liveUrl: "https://ecommerce-demo.vercel.app",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Aplicativo de gerenciamento de tarefas que otimiza produtividade com interface intuitiva, categorias personalizadas e sincronização em tempo real.",
    image: projectMobile,
    githubUrl: "https://github.com/RobertoSilvaDevFullStack/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
  },
];

// Substitua 'RobertoSilvaDevFullStack' pelo seu nome de usuário do GitHub
const GITHUB_USERNAME = "RobertoSilvaDevFullStack";

export const Projects = () => {
  const { repositories, loading, error } = useGitHubRepositories(GITHUB_USERNAME);

  // Usar projetos do GitHub ou fallback para projetos estáticos
  const projects = repositories.length > 0 ? repositories : fallbackProjects;

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada projeto representa um estudo de caso em miniatura, demonstrando problemas reais 
              que resolvi e as tecnologias aplicadas. Conectado automaticamente ao GitHub para 
              sempre exibir meus trabalhos mais recentes.
            </p>
            
            {/* Status da integração GitHub */}
            <div className="mt-6 flex justify-center">
              {loading ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Carregando projetos do GitHub...</span>
                </div>
              ) : error ? (
                <Card className="bg-destructive/10 border-destructive/20 max-w-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-destructive mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-medium">Erro ao carregar do GitHub</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Exibindo projetos em modo offline. {error}
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={handleRefresh}
                      className="w-full"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Tentar novamente
                    </Button>
                  </CardContent>
                </Card>
              ) : repositories.length > 0 ? (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Conectado ao GitHub - Projetos atualizados automaticamente</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Github className="w-4 h-4" />
                  <span>Exibindo projetos em modo demonstração</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in-delayed">
            <Button
              size="lg"
              variant="outline"
              className="border-glass hover:bg-glass hover:text-primary hover-lift group"
              asChild
            >
              <a 
                href={`https://github.com/RobertoSilvaDevFullStack`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" />
                Ver todos os projetos no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};