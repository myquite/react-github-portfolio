import React from "react";

const ProjectItem = (props) => {
  return (
    <li>
      <div>
        <h3>{props.project.name}</h3>
        <p>{props.project.description}</p>
        <a href={props.project.html_url} target="_blank">Github Link</a>
      </div>
    </li>
  );
};


export default ProjectItem;