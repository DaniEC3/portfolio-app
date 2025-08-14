
import {type LucideIcon} from 'lucide-react';
import { s } from 'motion/react-client';

type Tab = { icon:LucideIcon ; label: string }
interface SkillCardProps {
  frontend: string[];  
  backend: string[];
  soft: string[];
  selectedTab: Tab;
}

export default function SkillCard( {frontend,backend,soft, selectedTab}: SkillCardProps) {
  // This component will render the skills in a card format) {
  console.log("Rendering SkillCard with props:", selectedTab.label);
  return (
    <div className="">
      {selectedTab.label === 'Front-End' && frontend?.map((S:string) => (
        <div key={S} className="skill-item"> 
          {S}
        </div>
      ))}
      {selectedTab.label === 'Back-End' && backend?.map((S:string) => (
        <div key={S} className="skill-item">
          {S}
        </div>
      ))}
      {selectedTab.label === 'Soft-Skills' && soft?.map((S:string) => (
        <div key={S} className="skill-item">
          {S}
        </div>
      ))}
      

    </div>
  )
}
