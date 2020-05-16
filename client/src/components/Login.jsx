import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './Login.css'
export default class Login extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="form-container">
        <h3>Login</h3>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleLogin(this.state);
            this.props.history.push('/');
          }}>
          <label htmlFor="username">username:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <p>Not a member? <Link to='/register'>register</Link></p>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}