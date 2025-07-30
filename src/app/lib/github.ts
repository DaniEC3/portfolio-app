export async function fetchGitHubProjects() {
  const response = await fetch('https://api.github.com/users/DaniEC3/repos');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  const data = await response.json();

  return data;
}
