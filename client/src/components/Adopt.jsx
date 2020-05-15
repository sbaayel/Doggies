import React, { Component } from 'react'
import '../App.css'
export default class Adopt extends Component {
  state = {
    name: '',
    address: '',
    message: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, address,  message} = this.state;
    return (
      
      <form className="auth-form"
        onSubmit={(e) => {
        e.preventDefault();
        this.props.handleAdopt(this.state);
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
       
    )
  }
}