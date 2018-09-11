import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: [],
    }
  }

  
  // const ProjectList = (props) => {
  //   const project = props.repos.map((project) => {
  //     return <ProjectItem key={project.id} project={project} />
  //   });

  componentDidMount(props) {
    // fetch(props.repos.url)
    // .then(res => res.json())
    // .then((content ) => {
    //   this.setState({ content });
    // });
  }

  render() {
    return (
      <section className="projects">
      <h2>Projects</h2>
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

