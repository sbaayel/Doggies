import React, { Component } from 'react'
import '../App.css'
import './CreateDog.css'
export default class CreateDog extends Component {
  state = {

    name: "",
    age: "",
    sex: "",
    breed: "",
    height: "",
    weight: "",
    description: "",
    shelter: "",
    image: "",
    user_id: 1,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, age, sex, breed, height, weight, description, shelter, image} = this.state;
    return (
      <div className="create-main-container">
        
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleDogSubmit(this.state);
        this.props.history.push('/dogs');
      }}>
          <h3>Add a Dog</h3>
          <div className="create-edit-container">
            
      
            <input className="create-edit-input"
               placeholder="Add dogs name here"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

     
            <input className="create-edit-input"
              placeholder="Age"
          id="age"
          type="text"
          name="age"
          value={age}
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="Sex eg. Male or Female"
          id="sex"
          type="text"
          name="sex"
          value={sex}
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="Breed eg. golden retriever etc..."
          id="breed"
          type="text"
          name="breed"
          value={breed}
          onChange={this.handleChange}
        />

      
            <input className="create-edit-input"
               placeholder="Hieght eg. 24 inches etc..."
          id="height"
          type="text"
          name="height"
          value={height}
          onChange={this.handleChange}
        />
        
       
            <input className="create-edit-input"
               placeholder="Weight eg. 24lb .."
          id="weight"
          type="text"
          name="weight"
          value={weight}
          onChange={this.handleChange}
        />

       
            <input className="create-edit-input"
               placeholder="Shelter eg. Your shelter name... "
          id="shselter"
          type="text"
          name="shelter"
          value={shelter}
          onChange={this.handleChange}
        />


            <input className="create-edit-input"
               placeholder="image url eg: https://www.washingtonpost.comarc-anglerfish-washpost-prod-washpost/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg "
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
              
           
          </div>

          <div className="description">
      
            <textarea className="textarea-description"
              placeholder="Tell would be adopter about the dog you are putting for adoption here... "
              rows={10}
              cols={78}
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
            />
            <button className="button">Submit</button>
          </div>
          

        </form>
      </div>
    )
  }
}