import React from 'react'
import { Link } from 'react-router-dom';

export default function DogDetails(props) {
  return (
    <div>
      <h3>Dogs</h3>
      {props.dogs.map(dog => (
        <React.Fragment key={dog.id}>
          <p>{dog.name}</p>










          <button onClick={() => {
            props.history.push(`/dogs/${dog.id}/edit`);
          }}>Edit</button>
          <button onClick={() => {
            props.handleDogDelete(dog.id);
          }}>Delete</button>
          <br />
        </React.Fragment>
      ))}
     
    </div>
  )
}