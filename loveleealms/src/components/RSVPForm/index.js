import React, { Component } from "react";
import { Container, Row, Col } from '../Grid';
import emailjs from 'emailjs-com';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class RSVPForm extends Component {
    state = {
        firstName: "",
        lastName: "",
		email: "",
		message: "",
        numOfGuests: ""
      };
    
      componentDidMount(){
		var elem = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elem, {
            dropdownOptions: {
                '1': "1",
                '2': "2",
				'3': "3",
				'4': "4"
            }
        });
        // instances.getSelectedValues();
        // var instance = M.FormSelect.getInstance(elem);
        // instance.getSelectedValues();
        // this.setState({
        //     numOfGuests: "2"
        // });
    }
    
      handleInputChange = event => {
    
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
		event.preventDefault();
		var elem = document.querySelectorAll('.guest-count-select');
		var instance = M.FormSelect.getInstance(elem);
		
		console.log(this.state.numOfGuests);
		
        alert(`Hello ${this.state.firstName} ${this.state.lastName} at ${this.state.email} guestCount: ${this.state.numOfGuests} says ${this.state.message}`);
        this.setState({
          firstName: "",
          lastName: "",
		  email: "",
		  message: "",
		  numOfGuests: ""
        });
      };
      sendEmail = e => {
		  console.log("sendEmail called");
        emailjs.sendForm('gmail', 'template_RKaPY28P', e.target, 'user_HH95xqARzcJyFjdXFLu6p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log("error message here" + error.text);
          });
	  }
	  
  render() {
    return (
		<div className='rsvp-wrapper'>
      	<Container>
		  <Row>
			  <Col size='l12 m12 s12 rsvp-title'>
				<p>PLEASE RESPOND BY APRIL 1ST, 2020</p>
			  </Col>
		  </Row>
	  	<Row>
        <form className="form" onSubmit={this.sendEmail}>
		<Col size='l6 m6 s12'>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
		  </Col>
		  <Col size='l6 m6 s12'>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
		  </Col>
		  <Col size='l6 m6 s12'>
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
		  </Col>
		  <Col size='l6 m6 s12'>
          <div class="input-field">
            <select 
			className='guest-count-select' 
			name='numOfGuests' 
			onChange={this.handleInputChange}>

              <option value="" disabled selected>Number of guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
		  </Col>
		  <Col size='l12 m12 s12'>
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
          />
		  </Col>
		  <Col size='l12 m12 s12' className='submit-button'>
          <button onClick={this.handleFormSubmit}>Submit</button>
		  </Col>
		  
        </form>
		</Row>
      </Container>
	  </div>
    );
  }
}

export default RSVPForm;