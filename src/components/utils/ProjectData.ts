import { fetchGitHubProjects } from '@/app/lib/github';
import type { GitHubProject } from '@/types/github';


export async function getProjectsData() {
  const projects = await fetchGitHubProjects();
  if (projects.length === 0) {
    return console.error('No projects found');
  }
  console.log('Projects', projects);
  return projects;
}

export async function filteredProjectsBySkill(skills: string[]) {
  const projects = await fetchGitHubProjects();
  const filteredProjects = projects.filter((project: GitHubProject) =>
    skills.some(skill =>
      project.name.toLowerCase().includes(skill.toLowerCase()) ||
      (project.topics && project.topics.some((topic: string) => topic.toLowerCase().includes(skill.toLowerCase())))
    )
  );
  return filteredProjects;
}
