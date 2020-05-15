import React, { Component } from 'react'
import { getOneDog } from '../services/api-helper';
import '../App.css'
export default class UpdateDog extends Component {
  state = {
    name: ""
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
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}