import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './ShowDog.css'
export default function ShowDogs(props) {
  return (
    <>
     
    <div className="content">
       <h3>Adopt a Dog</h3>
      <div className="row">
      {props.dogs.map(dog => (
        <React.Fragment  key={dog.id}>
          <div className="cell">
            <img  src={dog.image} alt={dog.name} />
            <Link className="dog-name" to={`/dogs/${dog.id}`}>{dog.name}</Link>
          <Link to={`/adopts/${dog.id}/new`} className="dog-name">Adopt</Link>
          </div>
          
          
          
        
        </React.Fragment>
      ))}
        {/* <Link to="/new/dogs"><button>Create</button></Link> */}
     </div>
    </div>
    </>
  )
}