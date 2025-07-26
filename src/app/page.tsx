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
        <HeroComponent></HeroComponent>
        <AboutComponent></AboutComponent>
        <ProjectsComponent></ProjectsComponent>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  )
}
