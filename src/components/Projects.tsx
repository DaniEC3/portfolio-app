'use client';
import { useEffect, useState } from 'react';


interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function ProjectsComponent() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/DaniEC3/repos');
      const data = await response.json();
      setRepos(data);
      console.log(data);
    };

    fetchRepos();
  }, []);
  return (
    <section className="bg-gray-200 h-[50em] flex items-center justify-center p-8 text-gray-900">
      <div className=''>Current Projects</div>
    </section>
  )
}

