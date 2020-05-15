
import React, { Component } from 'react'

import '../App.css'
import { getOneDog } from '../services/api-helper'

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
      <div>
        {
          dog &&
          <>
            <h1>{dog.name}</h1>
            <h1>{dog.breed}</h1>
            
          </>
        }
         
      </div>
    )
  }
}
  export default DogDetails;