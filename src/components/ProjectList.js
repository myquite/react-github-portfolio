import React, { Component } from "react";
import '../App.css';
import ProjectItem from "./ProjectItem";


class ProjectList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: [],
    }
  }

  render() {
    return (
      <section className="projects">
      <h2>My Projects</h2>
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

