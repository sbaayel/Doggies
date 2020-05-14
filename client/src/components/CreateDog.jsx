import React, { Component } from 'react'

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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleDogSubmit(this.state);
        this.props.history.push('/dogs');
      }}>
        <h3>Add a Dog</h3>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

      <label htmlFor="age">age:</label>
        <input
          id="age"
          type="text"
          name="age"
          value={age}
          onChange={this.handleChange}
        />

       <label htmlFor="sex">sex:</label>
        <input
          id="sex"
          type="text"
          name="sex"
          value={sex}
          onChange={this.handleChange}
        />

        <label htmlFor="breed">breed:</label>
        <input
          id="breed"
          type="text"
          name="breed"
          value={breed}
          onChange={this.handleChange}
        />

      <label htmlFor="height">height:</label>
        <input
          id="height"
          type="text"
          name="height"
          value={height}
          onChange={this.handleChange}
        />
        
        <label htmlFor="weight">weight:</label>
        <input
          id="weight"
          type="text"
          name="weight"
          value={weight}
          onChange={this.handleChange}
        />

       <label htmlFor="shelter">shelter:</label>
        <input
          id="shselter"
          type="text"
          name="shelter"
          value={shelter}
          onChange={this.handleChange}
        />

<label htmlFor="description">decription:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />

<label htmlFor="image">image:</label>
        <input
          id="image"
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}