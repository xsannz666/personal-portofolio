import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="https://raw.githubusercontent.com/xsannz666/DISASTER-V2/main/serti1.png"
          title="Coming Soon"
          description="Coming Soon Next Projects"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Clothing Brand Website"
          description="clothing brand website, this is my first project created with HTML CSS for consumers and admins who can buy and sell."
        />
        <ProjectCard
          src="https://raw.githubusercontent.com/xsannz666/DISASTER-V2/main/serti2.png"
          title="Coming Soon"
          description="Coming Soon Next Projects"
        />
      </div>
    </div>
  );
};

export default Projects;
