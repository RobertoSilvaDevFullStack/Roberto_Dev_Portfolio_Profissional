import { useState, useEffect } from 'react';

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  languages_url: string;
  updated_at: string;
  topics: string[];
}

interface ProjectData {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  image: string;
}

const PROJECT_IMAGES = [
  '/placeholder.svg?height=200&width=400&text=Project+1',
  '/placeholder.svg?height=200&width=400&text=Project+2',
  '/placeholder.svg?height=200&width=400&text=Project+3',
  '/placeholder.svg?height=200&width=400&text=Project+4',
  '/placeholder.svg?height=200&width=400&text=Project+5',
];

// Mapeamento manual de URLs de produção (opcional)
const PRODUCTION_URLS: Record<string, string> = {
  // Exemplo: 'nome-do-repositorio': 'https://projeto.vercel.app'
};

export const useGitHubRepositories = (username: string) => {
  const [repositories, setRepositories] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!username) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Buscar os repositórios mais recentes
        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=5&type=owner`
        );

        if (!repoResponse.ok) {
          throw new Error('Erro ao buscar repositórios do GitHub');
        }

        const repos: GitHubRepository[] = await repoResponse.json();

        // Processar cada repositório
        const projectPromises = repos.map(async (repo, index) => {
          let technologies = [repo.language].filter(Boolean);

          // Tentar buscar linguagens adicionais
          try {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) {
              const languages = await langResponse.json();
              technologies = Object.keys(languages).slice(0, 4); // Máximo 4 tecnologias
            }
          } catch (error) {
            console.warn(`Erro ao buscar linguagens para ${repo.name}:`, error);
          }

          // Adicionar tópicos como tecnologias se disponível
          if (repo.topics && repo.topics.length > 0) {
            technologies = [...new Set([...technologies, ...repo.topics])].slice(0, 4);
          }

          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || 'Projeto desenvolvido com foco em soluções práticas e eficientes.',
            githubUrl: repo.html_url,
            liveUrl: PRODUCTION_URLS[repo.name],
            technologies: technologies.length > 0 ? technologies : ['JavaScript'],
            image: PROJECT_IMAGES[index] || PROJECT_IMAGES[0],
          };
        });

        const projects = await Promise.all(projectPromises);
        setRepositories(projects);
      } catch (err) {
        console.error('Erro ao buscar repositórios:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  return { repositories, loading, error };
};