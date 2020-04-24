import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const DishesList = ({dishes}) => {
    return (
        <ListGroup>
            {dishes.dish.map(dish => <ListGroupItem key={dish.id}>{dish.id}. {dish.timeOfDay} {dish.dish}</ListGroupItem> )}
        </ListGroup>
    )
}

const mapStateToProps = state => ({
    dishes: state.dishes
  })
  
//   const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
//   })
  
  export default connect(mapStateToProps, null)(DishesList)
