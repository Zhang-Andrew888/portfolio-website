import AboutSection from "./components/AboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import LandingSection from "./components/LandingSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <LandingSection />
      <div className="container mx-auto px-12 py-4">
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
