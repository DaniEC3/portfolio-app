
import { type LucideIcon } from 'lucide-react';
import * as motion from "motion/react-client"

type Skill = {
  name: string;
  color: string; // Tailwind class or custom CSS class
};
type Tab = { icon: LucideIcon; label: string }
interface SkillCardProps {
  frontend: Skill[];
  backend: Skill[];
  soft: Skill[];
  selectedTab: Tab;
}

export default function SkillCard({ frontend, backend, soft, selectedTab }: SkillCardProps) {

  // This component will render the skills in a card format) {
  // console.log("Rendering SkillCard with props:", selectedTab.label);
  return (
    <div className="flex flex-wrap w-full h-full gap-4 p-5 justify-center">
      {selectedTab.label === 'Front-End' && frontend?.map((S: Skill) => (
        <motion.div
          key={S.name}
          className="skill-item w-1/3 md:w-[30%] p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:cursor-pointer
          flex items-center justify-center text-center hover:
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, color: S.color }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = S.color} // example hover color
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // reset hover color
          transition={{ duration: 0.3 }}
        >
          {S.name}
        </motion.div>

      ))}
      {selectedTab.label === 'Back-End' && backend?.map((S: Skill) => (
        <motion.div
          key={S.name}
          className="skill-item w-1/3 md:w-[30%] p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:cursor-pointer
          flex items-center justify-center text-center hover:
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, color: S.color }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = S.color} // example hover color
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // reset hover color
          transition={{ duration: 0.3 }}
        >
          {S.name}
        </motion.div>
      ))}
      {selectedTab.label === 'Soft-Skills' && soft?.map((S: Skill) => (
        <motion.div
          key={S.name}
          className="skill-item w-1/3 md:w-[30%] p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:cursor-pointer
          flex items-center justify-center text-center hover:
          "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, color: S.color }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = S.color} // example hover color
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // reset hover color
          transition={{ duration: 0.3 }}
        >
          {S.name}
        </motion.div>
      ))}


    </div>
  )
}
