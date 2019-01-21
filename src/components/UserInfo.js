import React from 'react';
import '../App.css';

import Hireable from './Hireable';

const UserInfo = props => {
  return (
    <div className="card userinfo">
      <div className="avatar">
        <img src={props.user.avatar_url} alt={props.user.name} />
      </div>
      <div className="info">
        <h1>
          {props.user.name}
          <a
            href={props.user.html_url}
            aria-label={props.user.name + "'s GitHub Profile"}
          >
            <i className="fab fa-github" />
          </a>
        </h1>

        <p>{props.user.bio}</p>
        <p>
          <i className="fas fa-map-marker-alt" /> {props.user.location}
        </p>
      </div>
      <Hireable user={props.user} contact={props.contact} />
    </div>
  );
};

export default UserInfo;
