import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css'
import Login from './Login';
import Register from './Register';
import { getAllDogs, postDog, putDog, destroyDog, postAdopt, getOneDog } from '../services/api-helper';
import ShowDogs from './ShowDog';
import CreateDog from './CreateDog';
import UpdateDog from './UpdateDog';
import Adopt from './Adopt'
import DogDetails from './DogDetails'


export default class Main extends Component {
  state = {
    
    dogs: []
  }

  componentDidMount() {
    
    this.readAllDogs();
  }

  readAllDogs = async () => {
    const dogs = await getAllDogs();
    this.setState({ dogs })
  }

  getOneDog = async () => {
    const dogs = await getOneDog();
    this.setState({ dogs })
  }

  handleDogSubmit = async (dogData) => {
    const newDog = await postDog(dogData);
    this.setState(prevState => ({
      dogs: [...prevState.dogs, newDog]
    }))
  }

  handleDogUpdate = async (id, dogData) => {
    const updatedDog = await putDog(id, dogData);
    this.setState(prevState => ({
      dogs: prevState.dogs.map(dog => {
        return dog.id === id ? updatedDog : dog
      })
    }))
  }

  handleAdoptSubmit = async (adoptData) => {
    const adoptDog = await postAdopt(adoptData);
    this.setState(prevState => ({
      posts: [...prevState.posts, adoptDog]
    }))
  }


  handleDogDelete = async (id) => {
    await destroyDog(id);
    this.setState(prevState => ({
      dogs: prevState.dogs.filter(dog => {
        return dog.id !== id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        
        <Route exact path='/dogs' render={(props) => (
          <ShowDogs
            {...props}
            handleDogDelete={this.handleDogDelete}
            dogs={this.state.dogs}
          />
        )} />

         <Route exact path= '/dogs/:id' render={(props) => {
          const { id } = props.match.params
          return <DogDetails
            {...props}
            dogId={id}
          
          />
        }
        } />
        
        <Route path="/dogs/new" render={(props) => (
          <CreateDog
            {...props}
            handleDogSubmit={this.handleDogSubmit}
          />
        )} />
        <Route path='/dogs/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateDog
            {...props}
            handleDogUpdate={this.handleDogUpdate}
            dogId={id}
          />
        }} />
       
       <Route path="/adopts/:id/new" render={(props) => (
          <Adopt
            {...props}
            handleAdoptSubmit={this.handleAdoptSubmit}
          />
        )} />
      </main>
    )
  }
}