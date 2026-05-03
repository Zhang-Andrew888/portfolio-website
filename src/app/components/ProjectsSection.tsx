import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "BurgerAI",
    description:
      "I was a top 12 finalist in the Cornell AI Hackathon, where I developed an end-to-end evaluation pipeline using Cursor to implement safe guardrails for agentic AI. By integrating OWASP security guardrails, I successfully improved GPT-4o agentic AI accuracy from 35% to 90%.",
    image: "/images/projects/project_1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Critter World",
    description:
      "I designed and implemented a recursive-descent parser and interpreter, constructing and evaluating ASTs. I also developed multithreaded GUI application in JavaFX simulating autonomous agents using custom Abstract Syntax Tree based programming language.",
    image: "/images/projects/project_2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Menuvo",
    description:
      "I spearheaded a cross-functional collaboration between design and engineering teams to architect and ship a mobile recipe-sharing application. I was responsible for designing a scalable database layer that modeled complex relationships between users, recipes, and social graphs. I integrated services including Amazon S3 Buckets to store images.",
    image: "/images/projects/project_3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Anycard",
    description:
      "I developed a full-stack web application leveraging Next.js and Express to automate card generation. To power the application’s intelligence, I engineered server-side routers that aggregate and process real-time data from the Claude and Serper APIs. Additionally, I designed a secure infrastructure for the platform by implementing Firebase Auth for user session management and utilizing Firebase for scalable data storage.",
    image: "/images/projects/project_4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Fried",
    description:
      "I engineered a 2D game in OCaml, leveraging functional programming paradigms and a strict MVC (Model-View-Controller) architecture to ensure clean separation of concerns. Central to the technical implementation was a scalable map rendering system built upon well-structured data models designed for performance and extensibility. To maintain a robust codebase, I established comprehensive unit test coverage, ensuring high code quality and the reliability of complex game logic within a purely functional environment.",
    image: "/images/projects/project_5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Hobby Swap",
    description:
      "A platform for Cornell University affiliated hobby enthusiasts to connect, share, and trade their hobbies and knowledge. They can create a profile with their NetID, username, and password, list hobbies they want to learn and hobbies they want to teach, and request to match with another user to trade their respective hobbies. HobbySwap uses intelligent matching algorithms to connect people based on related hobbies and provide community-building enterntainment to their lives.",
    image: "/images/projects/project_6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <h2 className="mb-8 text-4xl font-bold text-white">My Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
