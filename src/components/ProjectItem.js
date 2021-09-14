import React, { Component } from "react";
import "../App.css";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: [
        "#F0AD4E",
        "#5CB85C",
        "#0275D8",
        "#D9534F",
        "#D34CFE",
        "#F8D71C",
      ],
      selectedColor: "",
    };
  }

  getRandomColor() {
    let item =
      this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
    this.setState({
      selectedColor: item,
    });
  }

  componentDidMount() {
    this.getRandomColor();
  }

  render() {
    return (
      <li>
        <div className="card project">
          {/* 
            img tag is getting a .png file from the project with the same name as the project. ex. react-github-profile.png 
            Selects a default image if screenshot is not present. 
          */}
          <img
            style={{ backgroundColor: this.state.selectedColor }}
            src={`https://raw.githubusercontent.com/${this.props.project.full_name}/master/${this.props.project.name}.png`}
            onError={(e) => {
              e.target.src = require("../images/imgDefault.png");
            }}
            alt="project screenshot"
          />
          <div className="card-body">
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
            <a
              href={this.props.project.html_url}
              className="button"
              target="_blank"
            >
              <i className="fas fa-code" /> Source
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ProjectItem;

// https://raw.githubusercontent.com/myquite/multiplication-flashcards/master/multiplication_flashcards.png
