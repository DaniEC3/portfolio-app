import { fetchGitHubProjects } from '@/app/lib/github';

export async function getProjectsData() {
  const projects = await fetchGitHubProjects();
  if (projects.length === 0) {
    return console.error('No projects found');
  }
  return projects;
}

