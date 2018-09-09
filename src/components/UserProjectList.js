import React from "react";
import UserProjectItem from "./UserProjectItem";

const UserProjectList = (props) => {
  const projectItems = props.repos.map((project) => {
    return <UserProjectItem key={project.id} project={project} />
  });


  return (
    <section className="projects">
    <h2>Projects</h2>
      <ul>
        {projectItems}
      </ul>
    </section>
  );
};

export default UserProjectList;

