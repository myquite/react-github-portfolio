import React from "react";

const ProjectItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.project.name}</h3>
        <img src={`https://raw.githubusercontent.com/${props.project.full_name}/master/${props.project.name}.png`} alt="project screenshot"/>
        <p>{props.project.description}</p>
        <a href={props.project.html_url} target="_blank">Github Link</a>
      </div>
    </li>
  );
};


export default ProjectItem;
