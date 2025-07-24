import NavbarComponent from '@/components/Navbar';
import FooterComponent from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";
import AboutComponent from "@/components/About";
import HeroComponent from "@/components/Hero";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <NavbarComponent></NavbarComponent>
      <HeroComponent></HeroComponent>
      <AboutComponent></AboutComponent>
      <ProjectsComponent></ProjectsComponent>
      <FooterComponent></FooterComponent>
    </main>
  )
}
