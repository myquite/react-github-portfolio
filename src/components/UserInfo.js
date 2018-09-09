import React from "react";

const UserInfo = (props) => {
  return (
    <div className="userinfo">
      <img src={props.user.avatar_url} alt={props.user.name}/>
      <h1>{props.user.name}</h1>
      <h2>{props.user.login}</h2>
      <h3>{props.user.bio}</h3>
      <h4>Location: {props.user.location}</h4>
    </div>
  );
}

export default UserInfo;
