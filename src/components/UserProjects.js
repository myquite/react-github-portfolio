import React from "react";

const UserProjects = (props) => {
  return (
    <ul className="userprojects">
      {props.repos.length}
    </ul>
  );
};

export default UserProjects;