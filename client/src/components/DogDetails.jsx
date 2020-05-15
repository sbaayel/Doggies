
import React, { Component } from 'react'

import '../App.css'
import { getOneDog } from '../services/api-helper'
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

  render() {
    const { dog } = this.state;
    
    return (
      <div className="dog-details">
        {
          dog &&
          <div className="detail">
            <div className="name">{dog.name}</div>
            <div className="age">{dog.age}</div>
            <div className="sex">{dog.sex}</div>
            <div className="breed">{dog.breed}</div>
            <div className="weight">{dog.weight}</div>
            <div className="height">{dog.height}</div>
            <div className="shelter">{dog.shelter}</div>
            <img className="image" src={dog.image} alt={dog.name}/>
            <div className="description">{dog.description}</div>

          </div>
        }
         
      </div>
    )
  }
}
  export default DogDetails;