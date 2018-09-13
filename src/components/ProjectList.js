import React, { Component } from "react";
import '../App.css';
import ProjectItem from "./ProjectItem";


class ProjectList extends Component {
  render() {
    return (
      <section className="projects">
        <ul> 
          {
            this.props.repos.map((project) => {
              return <ProjectItem key={project.id} project={project} />
            })
          }
        </ul>
      </section>
    );
  };
};

export default ProjectList;

