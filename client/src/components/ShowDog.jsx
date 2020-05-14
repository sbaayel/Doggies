import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowDogs(props) {
  return (
    <div>
      <h3>Dogs</h3>
      {props.dogs.map(dog => (
        <React.Fragment key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
          
         
        
        </React.Fragment>
      ))}
     
    </div>
  )
}