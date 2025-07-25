import HeaderComponent from '@/components/Header';
import FooterComponent from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";
import AboutComponent from "@/components/About";
import HeroComponent from "@/components/Hero";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <AboutComponent></AboutComponent>
      <ProjectsComponent></ProjectsComponent>
      <FooterComponent></FooterComponent>
    </main>
  )
}
