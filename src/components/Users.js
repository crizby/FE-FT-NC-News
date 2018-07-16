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
              <img src={avatar_url} className="userImage" alt={username} />
              <p>Username: {username}</p>
              <p>Real Name: {name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
