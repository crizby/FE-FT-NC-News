import React from "react";
import "./Users.css";

const Users = ({ users }) => {
  return (
    <div className="userListContainer">
      <ul className="userList">
        {users.map(user => {
          const { name, username, avatar_url } = user;
          return (
            <li key={user._id} className="userListItem">
              <img src={avatar_url} className="userImage" />
              <h4>Username: {username}</h4>
              <h4>Real Name: {name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
