import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
export default function ShowDogs(props) {
  return (
    <div>
      <h3>Dogs</h3>
      <div className="food-list">
      {props.dogs.map(dog => (
        <React.Fragment key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          
          <button onClick={() => {
            props.history.push(`/dogs/${dog.id}/edit`);
          }}>Edit</button>
          <button onClick={() => {
            props.handledogDelete(dog.id);
          }}>Delete</button>
        
        </React.Fragment>
      ))}
        <Link to="/new/dogs"><button>Create</button></Link>
     </div>
    </div>
  )
}