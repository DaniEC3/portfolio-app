import { fetchGitHubProjects } from '@/app/lib/github';

interface GitHubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
  };
  topics?: string[];
}

export async function getProjectsData() {
  const projects = await fetchGitHubProjects();
  return projects;
}

export async function getFeaturedProject() {
  const projects = await fetchGitHubProjects();

  if (projects.length === 0) {
    return []; // or null, depending on your use case
  }

  const indices = [5, 6, 12];
  const featureProjects = indices
    .map(i => projects[i])
    .filter(Boolean); // removes undefined values if index doesn’t exist
  return featureProjects;
}

export async function filteredProjectsBySkill(skills: string[]) {
  const projects = await fetchGitHubProjects();
  const filteredProjects = projects.filter((project: GitHubRepo) =>
    skills.some(skill =>
      project.name.toLowerCase().includes(skill.toLowerCase()) ||
      (project.topics && project.topics.some((topic: string) => topic.toLowerCase().includes(skill.toLowerCase())))
    )
  );
  console.log('Filtered Projects:', filteredProjects)
  return filteredProjects;
}
