import { ProjectCard } from "./ProjectCard";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Painel de controle com visualização de dados em tempo real. Interface moderna com gráficos interativos e métricas de performance.",
    image: projectDashboard,
    githubUrl: "https://github.com/usuario/dashboard-project",
    liveUrl: "https://dashboard-demo.vercel.app",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos e painel administrativo.",
    image: projectEcommerce,
    githubUrl: "https://github.com/usuario/ecommerce-project",
    liveUrl: "https://ecommerce-demo.vercel.app",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
  },
  {
    title: "Task Manager App",
    description: "Aplicativo de gerenciamento de tarefas com interface intuitiva, categorias personalizadas e sincronização em tempo real.",
    image: projectMobile,
    githubUrl: "https://github.com/usuario/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Meus Projetos
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aqui estão alguns dos projetos que desenvolvi durante minha jornada acadêmica. 
              Cada projeto representa um desafio superado e um aprendizado consolidado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground font-semibold text-lg transition-colors"
            >
              Ver todos os projetos no GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};