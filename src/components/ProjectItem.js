import React from "react";

const ProjectItem = (props) => {
  return (
    <li>
      <div>
      
        <h3>{props.project.name}</h3>
        <p>{props.project.description}</p>
      
      </div>
    </li>
  );
};


export default ProjectItem;