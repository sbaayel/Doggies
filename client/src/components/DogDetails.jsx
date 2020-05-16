
import React, { Component } from 'react'

import '../App.css'
import { getOneDog, destroyDog } from '../services/api-helper'
import './DogDetails.css'
class DogDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: null
    }
  }
    componentDidMount(){
      this.setDog() 
  }
    
    
  
  setDog = async () => {
    const dog = await getOneDog(this.props.dogId);
    this.setState({ dog })
  }

  deleteDog(id) {
    const deleteDog = this.state.deleteDog.filter( dog => dog.id !== id );
    this.setState({deleteDog: destroyDog});
  }

  render() {
    const { dog } = this.state;
    
    return (
      <div className="dog-details">
        {
          dog &&
          
          <div className="detail">
            <div className="image">
              <img src={dog.image} alt={dog.name} />
              <p>{dog.name}</p>
            </div>
            <div className="items">
            
            <p>Age: {dog.age}</p>
            <p>Sex: {dog.sex}</p>
            <p>Breed: {dog.breed}</p>
            <p>Weight: {dog.weight}</p>
            <p>Height: {dog.height}</p>
            <p>Shelter: {dog.shelter}</p>
            <p>{dog.description}</p>
            </div>

           
          </div>
        }
         
        
      </div>
    )
  }
}
  export default DogDetails;