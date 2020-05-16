import React, { Component } from 'react'
import { getOneDog } from '../services/api-helper';
import '../App.css'
export default class UpdateDog extends Component {
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
    const {name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const dog = await getOneDog(this.props.dogId);
    this.setState({
      name: dog.name,
      sex: dog.sex,
      breed: dog.breed,
      age: dog.age,
      weight: dog.weight,
      height: dog.height,
      description: dog.description,
      shelter: dog.shelter,
      image: dog.image
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleDogUpdate(this.props.dogId, this.state);
        this.props.history.push('/dogs');
      }}>
        <h3>Update Dog</h3>
        <lable>name:</lable>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
<lable>sex:</lable>
<input
          name="sex"
          type="text"
          value={this.state.sex}
          onChange={this.handleChange}
        />
<lable>age:</lable>
<input
          name="age"
          type="text"
          value={this.state.age}
          onChange={this.handleChange}
        />
<lable>breed:</lable>
        <input
          name="breed"
          type="text"
          value={this.state.breed}
          onChange={this.handleChange}
        />
<lable>weight:</lable>
        <input
          name="weight"
          type="text"
          value={this.state.weight}
          onChange={this.handleChange}
        />
<lable>height:</lable>
        <input
          name="height"
          type="text"
          value={this.state.height}
          onChange={this.handleChange}
        />
<lable>shelter:</lable>
        <input
          name="shelter"
          type="text"
          value={this.state.shelter}
          onChange={this.handleChange}
        />
<lable>image:</lable>
        <input
          name="image"
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
        />
<lable>description:</lable>
        <input
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}