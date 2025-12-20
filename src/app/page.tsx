import HeaderComponent from '@/components/Header/Header';
import FooterComponent from "@/components/Footer/Footer";
import ProjectsComponent from "@/components/Projects/Projects";
import AboutComponent from "@/components/About/About";
import HeroComponent from "@/components/Hero/Hero";
import SkillsComponent from '@/components/Skills/Skills';




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
