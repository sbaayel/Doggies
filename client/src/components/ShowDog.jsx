import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowDogs(props) {
  return (
    <div>
      <h3>Dogs</h3>
      {props.dogs.map(dog => (
        <React.Fragment key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          <button onClick={() => {
            props.history.push(`/dogs/${dog.id}/edit`);
          }}>Edit</button>
          <button onClick={() => {
            props.handleDogDelete(Dog.id);
          }}>Delete</button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/dogs/new"><button>Create</button></Link>
    </div>
  )
}