import HeaderComponent from '@/components/Header';
import FooterComponent from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";
import AboutComponent from "@/components/About";
import HeroComponent from "@/components/Hero";

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>

      <main className="scroll-smooth flex-grow">
        <HeaderComponent></HeaderComponent>
        <div id="home">
        <HeroComponent></HeroComponent>
        </div>
        <AboutComponent></AboutComponent>
        <div id="projects" className="scroll-mt-20">
          <ProjectsComponent></ProjectsComponent>
        </div>
      </main>
      <div id="contact">
        <FooterComponent></FooterComponent>
      </div>

    </div>
  )
}
