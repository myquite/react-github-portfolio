import React from "react";

const ProjectItem = (props) => {
  return (
    <li>{props.project.name}</li>
  );
};

export default ProjectItem;