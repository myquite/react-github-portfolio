import React from "react";
import '../App.css';

const ProjectItem = (props) => {
  return (
    <li>
      <div className="project">
        <h3>{props.project.name}</h3>
        <img src={`https://raw.githubusercontent.com/${props.project.full_name}/master/${props.project.name}.png`} alt="project screenshot"/>
        <p>{props.project.description}</p>
        <a href={props.project.html_url} className="button" target="_blank">Github</a>
        <a href={`https://${props.project.owner.login}.github.com/${props.project.name}`} className="button" target="_blank">Site</a>
      </div>
    </li>
  );
};


export default ProjectItem;
