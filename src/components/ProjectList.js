import React from "react";
import '../App.css';
import ProjectItem from "./ProjectItem";


const ProjectList = (props) => {
  return (
    <section className="projects">
      <ul> 
        {
          props.repos.map((project) => {
            return <ProjectItem key={project.id} project={project} />
          })
        }
      </ul>
    </section>
  );
};

export default ProjectList;

