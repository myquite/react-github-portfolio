import React from "react";
import '../App.css';

const ProjectItem = (props) => {
  return (
    <li>
      <div className="project">
        <h2>{props.project.name}</h2>
        {/* 
          img tag is getting a .png file from the project with the same name as the project. ex. react-github-profile.png 
          Selects a default image if screenshot is not present. 
        */}
        <img 
          src={`https://raw.githubusercontent.com/${props.project.full_name}/master/${props.project.name}.png`}
          onError={(e) => {e.target.src = require('../images/imgDefault.png')}}
          alt="project screenshot"/>
        <div className="description">
          <p>{props.project.description}</p>
          <a href={props.project.html_url} className="button" target="_blank"><i className="fas fa-code"></i> Source</a>
        </div>
      </div>
    </li>
  );
};


export default ProjectItem;
