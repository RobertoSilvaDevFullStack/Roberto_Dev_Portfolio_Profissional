import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Smartphone, Globe } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development", 
    description: "React Native, Flutter, desenvolvimento híbrido",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Technologies",
    description: "APIs REST, GraphQL, Cloud Computing, DevOps",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sou estudante de Análise e Desenvolvimento de Sistemas com foco em tecnologias modernas. 
              Busco constantemente aprender e aplicar as melhores práticas de desenvolvimento, 
              criando soluções que fazem a diferença na vida das pessoas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card 
                key={skill.title}
                className="group bg-glass border-glass backdrop-blur-glass hover:shadow-glow-secondary transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-primary group-hover:text-primary-foreground transition-colors mx-auto w-fit p-3 bg-primary/20 rounded-full group-hover:bg-gradient-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-glass border-glass backdrop-blur-glass rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Projetos Desenvolvidos</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">3+</h3>
                <p className="text-muted-foreground">Anos de Estudo</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Tecnologias Dominadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};