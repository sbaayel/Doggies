import React, { Component } from 'react'
import { getOneDog } from '../services/api-helper';
import '../App.css'
import './UpdateDog.css'
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
      <div className="create-mains-container">
        <h3>Update Dog</h3>
      <form  onSubmit={(e) => {
        e.preventDefault();
        this.props.handleDogUpdate(this.props.dogId, this.state);
        this.props.history.push('/dogs');
        }}>
        
        <div className="create-edit-container"> 
{/* <img className="edit-image" src={dog.image} alt={dog.name}/> */}
          
            <input className="create-edit-input"
              placeholder="update image url"
          name="image"
          type="text"
          value={this.state.image}
          onChange={this.handleChange}
            />
            
            <input className="create-edit-input"
              placeholder="change name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
            />
            
            <input className="create-edit-input"
              placeholder="change sex"
          name="sex"
          type="text"
          value={this.state.sex}
          onChange={this.handleChange}
            />
            
            <input className="create-edit-input"
              placeholder="change age"
          name="age"
          type="text"
          value={this.state.age}
          onChange={this.handleChange}
            />
            
            <input className="create-edit-input"
              placeholder="change breed"
          name="breed"
          type="text"
          value={this.state.breed}
          onChange={this.handleChange}
            />
            
            <input className="create-edit-input"
              placeholder="change weight"
          name="weight"
          type="text"
          value={this.state.weight}
          onChange={this.handleChange}
            />
        
            <input className="create-edit-input"
              placeholder="change height"
          name="height"
          type="text"
          value={this.state.height}
          onChange={this.handleChange}
            />
      
            <input className="create-edit-input"
              placeholder="change shelter"
          name="shelter"
          type="text"
          value={this.state.shelter}
          onChange={this.handleChange}
            />
          </div>

          <div className="description">
            <textarea className="textarea-description"
              rows={10}
              cols={78}
          name="description"
          type="text"
          value={this.state.description}
          onChange={this.handleChange}
            />
            <button className="button">Submit</button>
          </div>
        

        </form>
        </div>
    )
  }
}