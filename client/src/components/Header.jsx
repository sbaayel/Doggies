import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h1>Doggies</h1>
      {
        props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :

          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
      }
      <hr />
      {
        props.currentUser
        &&
        <>
          <Link to="/dogs">Dogs</Link>
          
          <hr />
        </>
      }
    </header>
  )
}