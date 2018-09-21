import React from "react";
import '../App.css';

const Hireable = (props) => {
  if (props.user.hireable) {
    return (
      <div className="hireable">
        <a href={`mailto:${props.contact}`}>
          <p>Would you like to hire me?</p>
        </a>
      </div>
    );
  } else {
    return null;
  }
}

export default Hireable;