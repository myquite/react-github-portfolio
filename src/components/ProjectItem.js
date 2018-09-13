import React from "react";
import '../App.css';

const ProjectItem = (props) => {
  return (
    <li>
      <div className="project">
        <h2>{props.project.name}</h2>
        <img src={`https://raw.githubusercontent.com/${props.project.full_name}/master/${props.project.name}.png`} alt="project screenshot"/>
        <div className="description">
          <p>{props.project.description}</p>
          <a href={props.project.html_url} className="button" target="_blank">GitHub</a>
        </div>
      </div>
    </li>
  );
};


export default ProjectItem;
