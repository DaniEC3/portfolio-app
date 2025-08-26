import { fetchGitHubProjects } from '@/app/lib/github';
import type { GitHubProject } from '@/types/github';


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
  const filteredProjects =projects.filter((project: GitHubProject) =>
    skills.some(skill =>
      project.name.toLowerCase().includes(skill.toLowerCase()) ||
      (project.topics && project.topics.some((topic: string) => topic.toLowerCase().includes(skill.toLowerCase())))
    )
  );
  console.log('Filtered Projects:', filteredProjects)
  return filteredProjects;
}
