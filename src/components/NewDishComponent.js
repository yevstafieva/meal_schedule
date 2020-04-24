import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import {addDish} from '../actions';

class NewDish extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdownDishOpen: false,
            timeOfDay: "",
            dish:""
        }
    }

    toggleDropdownDish = () => {
        this.setState(prevState =>({
            dropdownDishOpen: !prevState.dropdownDishOpen
        }))
    };

    handleChangeDropdownDish = (e) => {
        const value = e.target.value;
        console.log(e.target.value)
        this.setState({timeOfDay: value})
        console.log(this.state)
    }

    handleSubmitDish = () => {

    }

    render () {
      return (
        <Form>
            <InputGroupButtonDropdown isOpen={this.state.dropdownDishOpen} toggle={this.toggleDropdownDish} addonType="prepend">
                <DropdownToggle id="timeOfDay" caret>
                    {(!this.state.dropdownDishOpen &&  !this.state.timeOfDay) ? "Choose time of day" : this.state.timeOfDay}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.handleChangeDropdownDish} value="Breakfast">Breakfast</DropdownItem>
                    <DropdownItem onClick={this.handleChangeDropdownDish} value="Lunch">Lunch</DropdownItem>
                    <DropdownItem onClick={this.handleChangeDropdownDish} value="Dinner">Dinner</DropdownItem>
                </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input placeholder="Enter a dish"/>
            <Button type="submit" onSubmit={this.handleSubmitDish}>Schedule</Button>
            
        </Form>
      )
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        onEstimateAccommodation: (newDish) => dispatch(addDish (newDish))
      }
    }

  export default connect(null, mapDispatchToProps)(NewDish);