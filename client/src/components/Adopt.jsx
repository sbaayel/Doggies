import React, { Component } from 'react'
import Modal from 'react-awesome-modal';
import {Link} from 'react-router-dom'
import '../App.css'
import './Adopt.css'
export default class Adopt extends Component {
  state = {
    name: '',
    address: '',
    message: '',
    user_id: this.props.currentUser,
    dog_id: this.props.dogId,
    visible: false
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}

  render() {
    const { name, address, message} = this.state;
    return (
      <div className="adopt-container">
       
      <form 
        onSubmit={(e) => {
        e.preventDefault();
        this.props.handleAdoptSubmit(this.state, this.state.dog_id);
        this.props.history.push('/');
      }}>
        <h3>Register</h3>
        <label htmlFor="name">Enter full name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Enter address:</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="message">Write your message here:</label>
        <input
          id="message"
          type="text"
          name="message"
          value={message}
          onChange={this.handleChange}
        />
        <br />
            <button>Submit</button>
           
          </form>
        
       </div>
    )
  }
}