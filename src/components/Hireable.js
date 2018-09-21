import React from "react";
import '../App.css';

const Hireable = (props) => {
  if (props.user.hireable) {
    return (
      <div className="hireable">
        <a href={`mailto:${props.contact}`}>
          <p><i className="fas fa-envelope"></i> I'm available for hire</p>
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export default Hireable;

