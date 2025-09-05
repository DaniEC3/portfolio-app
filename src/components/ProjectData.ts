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

export async function filteredProjectsBySkkill(skills: string[]) {
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

// export async function filteredProjectsBysSkill(skills: string[]) {
//   const projects = await fetchGitHubProjects();

//   const filteredProjects = projects.filter((project: GitHubRepo) => {
//     // Collect project skills: from name and topics
//     const projectSkills: string[] = [];

//     // Add name as one skill (optional, depending on your needs)
//     if (project.name) {
//       projectSkills.push(project.name.toLowerCase());
//     }
//     console.log('Project Name Skill:', project.name.toLowerCase());
//     // Add topics as skills
//     if (project.topics) {
//       projectSkills.push(...project.topics.map((topic: string) => topic.toLowerCase()));
//     }

//     console.log('Project Skills:', projectSkills);

//     // Normalize both arrays (lowercased, unique)
//     const uniqueProjectSkills = [...new Set(projectSkills)];
//     console.log('Unique Project Skills:', uniqueProjectSkills);
//     const normalizedSelected = skills.map(s => s.toLowerCase());
//     console.log('Normalized Selected Skills:', normalizedSelected);

//     skills.forEach(skill => {
      
//     }
//     // Check set equality: same length and every skill matches
//     return (
//       uniqueProjectSkills.length > 0 && 
         

//       uniqueProjectSkills.length === normalizedSelected.length &&
//       uniqueProjectSkills.every(skill => normalizedSelected.includes(skill))
//     );
//   });

//   console.log("Filtered Projects:", filteredProjects);
//   return filteredProjects;
// }
export async function filteredProjectsBySkill(skills: string[]) {
  const projects = await fetchGitHubProjects();
  const filteredProjects = projects.filter((project: GitHubRepo) => {
    // Get all project skills (from name and topics)
    const projectSkills: string[] = [];
    
    // Add skills found in project name
    skills.forEach(skill => {
      if (project.name.toLowerCase().includes(skill.toLowerCase())) {
        projectSkills.push(skill.toLowerCase());
      }
    });
    
    // Add skills found in project topics
    if (project.topics) {
      project.topics.forEach((topic: string) => {
        skills.forEach(skill => {
          if (topic.toLowerCase().includes(skill.toLowerCase())) {
            projectSkills.push(skill.toLowerCase());
          }
        });
      });
    }
    
    // Remove duplicates
    const uniqueProjectSkills = [...new Set(projectSkills)];
    const normalizedSelectedSkills = skills.map(skill => skill.toLowerCase()).sort();
    const normalizedProjectSkills = uniqueProjectSkills.sort();
    
    // Check if arrays are exactly the same
    return normalizedSelectedSkills.length === normalizedProjectSkills.length &&
           normalizedSelectedSkills.every((skill, index) => skill === normalizedProjectSkills[index]);
  });
  
  console.log('Filtered Projects:', filteredProjects);
  return filteredProjects;
}
