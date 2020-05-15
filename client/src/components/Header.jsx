import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
export default function Header(props) {
  return (
    <header>
      <div className="header-main">
       <Link to="/dogs"><h1 className="logo">Doggies</h1></Link> 
        <div className="auth">
      {
        props.currentUser
          ?
          <>
            <p className="tab">{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
            <Link to="/dogs/new"><button>Create</button></Link>
          </>
          :

          <>
            <Link className="tab" to="/login">Login</Link>
            <Link className="tab" to="/register">Register</Link>
            </>
          }
        </div>
      </div>
      {
        props.currentUser
        &&
        <>
         <Link className="tab" to="/adopt">Adopt</Link>
        
          
        </>
      }
    </header>
  )
}