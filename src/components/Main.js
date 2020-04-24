import React, { Component } from 'react';
import { 
    Container,
    } from 'reactstrap';
import NewDish from './NewDishComponent';
import DishesList from './DishesListComponent'

class Main extends Component {
    render () {
      return (
        <Container>
            <h1 className="text-center">Meal Schedule</h1>
            <div>Your menu is...</div>
            <DishesList />
            <NewDish />
        </Container>
      )
    }
  }
  export default Main;