import React from 'react';
import { Link} from 'react-router-dom';
// import '../App.css'
import './Header.css'
export default function Header(props) {
  return (
    <header>
      <div className="nav">
       <Link to="/dogs"><h1 className="logo">Doggies</h1></Link> 
        <div className="auth">
      {
        props.currentUser
          ?
          <>
                <p className="tab">welcome {props.currentUser.username}</p>
                <Link className="tab" to="/dogs/new">Add a dog</Link>
                <p className="tab" onClick={props.handleLogout}>Logout</p>
            
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
         {/* <Link className="tab" to="/adopt">Adopt</Link> */}
        
          
        </>
      }
    </header>
  )
}