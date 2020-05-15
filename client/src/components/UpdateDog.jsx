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
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const dog = await getOneDog(this.props.dogId);
    this.setState({
      name: dog.name
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
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
<lable>sex:</lable>
<input
          
          type="text"
          value={this.state.sex}
          onChange={this.handleChange}
        />
<lable>age:</lable>
<input
          type="text"
          value={this.state.age}
          onChange={this.handleChange}
        />
<lable>breed:</lable>
<input
          type="text"
          value={this.state.breed}
          onChange={this.handleChange}
        />
<lable>weight:</lable>
<input
          type="text"
          value={this.state.weight}
          onChange={this.handleChange}
        />
<lable>height:</lable>
<input
          type="text"
          value={this.state.height}
          onChange={this.handleChange}
        />
<lable>shelter:</lable>
<input
          type="text"
          value={this.state.shelter}
          onChange={this.handleChange}
        />
<lable>image:</lable>
<input
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
        />
<lable>description:</lable>
<input
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}