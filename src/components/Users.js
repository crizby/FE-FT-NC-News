import React from 'react';

const Users = ({ users }) => {

  return <ul>
    {users.map(user => {
      const { name, username, avatar_url } = user
      return <li key={user._id}>
        <h4>{username}</h4>
        <h4>By: {name}</h4>
        <img src={avatar_url} />
        <hr />

      </li>

    })}
  </ul>

}


export default Users;