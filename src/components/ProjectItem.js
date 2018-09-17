import React from "react";
import '../App.css';

const ProjectItem = (props) => {
  return (
    <li>
      <div className="project">
        <h2>{props.project.name}</h2>
        {/* img tag is getting a .png file from the project with the same name as the project. ex. react-github-profile.png */}
        <img src={`https://raw.githubusercontent.com/${props.project.full_name}/master/${props.project.name}.png`} alt="project screenshot"/>
        <div className="description">
          <p>{props.project.description}</p>
          <a href={props.project.html_url} className="button" target="_blank"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </li>
  );
};


export default ProjectItem;
