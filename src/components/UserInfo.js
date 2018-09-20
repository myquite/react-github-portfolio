import React from "react";
import '../App.css';

const UserInfo = (props) => {
  return (
    <div className="userinfo">
      <div className="avatar">
        <img src={props.user.avatar_url} alt={props.user.name}/>
      </div>
      <div className="info">
        <h1>{props.user.name}</h1>
        <h2><a href={props.user.html_url}><i className="fab fa-github"></i> {props.user.login}</a></h2>
        <h3>{props.user.bio}</h3>
        <h4><i className="fas fa-map-marker-alt"></i> {props.user.location}</h4>
      </div>
    </div>
  );
}

export default UserInfo;
