import HeaderComponent from '@/components/Header';
import FooterComponent from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";
import AboutComponent from "@/components/About";
import HeroComponent from "@/components/Hero";
import SkillsComponent from '@/components/Skills';



export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>

      <main className="scroll-smooth flex-grow">
        <div id="home" className="scroll-mt-20">

        </div>
        <HeaderComponent></HeaderComponent>
        <div id="home">
          <HeroComponent />
        </div>
        <AboutComponent />
        <div id="projects" className="scroll-mt-20">
          <ProjectsComponent />
        </div>
        <div id="skills" className="scroll-mt-20">
          <SkillsComponent />
        </div>
      </main>
      <div id="contact">
        <FooterComponent></FooterComponent>
      </div>

    </div>
  )
}
