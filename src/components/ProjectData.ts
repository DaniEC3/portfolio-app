import { fetchGitHubProjects } from '@/app/lib/github';


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
