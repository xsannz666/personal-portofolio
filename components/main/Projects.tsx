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
          src="/proj2.png"
          title="E-Commerce ui app"
          description=""
        />
        <ProjectCard
          src="/CardImage.png"
          title="Clothing Brand Website"
          description="clothing brand website, this is my first project created with HTML CSS for consumers and admins who can buy and sell."
        />
        <ProjectCard
          src="/Proj3.png"
          title="Hotel Booking App"
          description=""
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="CERTIFICATE"
          description=""
        />
                <ProjectCard
          src="/SpaceWebsite.png"
          title="CERTIFICATE"
          description=""
        />
                <ProjectCard
          src="/Serti2.png"
          title="CERTIFICATE"
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;
