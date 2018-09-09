import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = (props) => {
  const project = props.repos.map((project) => {
    return <ProjectItem key={project.id} project={project} />
  });


  return (
    <section className="projects">
    <h2>Projects</h2>
      <ul>
        {project}
      </ul>
    </section>
  );
};

export default ProjectList;

