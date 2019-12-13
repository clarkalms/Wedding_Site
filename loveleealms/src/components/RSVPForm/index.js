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
		firstName2: "",
        lastName2: "",
		email: "",
		message: "",
		numOfGuests: "",
		attendingAnswer: null
      };
    
      componentDidMount(){
		var elem = document.querySelectorAll('select');
        M.FormSelect.init(elem, {
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
		M.FormSelect.getInstance(elem);
		
		console.log(this.state.numOfGuests);
		// this.sendEmail();
		
		alert(`First Name: ${this.state.firstName} 
				Last Name: ${this.state.lastName} 
				First Name 2: ${this.state.firstName2} 
				Last Name 2: ${this.state.lastName2} at ${this.state.email} 
				Attending: ${this.state.attendingAnswer}
				guestCount: ${this.state.numOfGuests} 
				Email: ${this.state.email}
				Message: ${this.state.message}`
		);
        this.setState({
			firstName: "",
			lastName: "",
			firstName2: "",
			lastName2: "",
			email: "",
			message: "",
			numOfGuests: "",
			attendingAnswer: ""
		});
		
      };
      sendEmail = e => {
		  console.log("sendEmail called");
		  var template_params = {

			"attendingAnswer": this.state.attendingAnswer,
			"numOfGuests": this.state.numOfGuests,
			"firstName": this.state.firstName,
			"lastName": this.state.lastName,
			"firstName2": this.state.firstName2,
			"lastName2": this.state.lastName2,
			"email": this.state.email,
			"message": this.state.message
		 }
        emailjs.send('gmail', 'template_RKaPY28P', template_params, 'user_HH95xqARzcJyFjdXFLu6p')
          .then((result) => {
              console.log("SUCCESS!", result.text);
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
				<p>KINDLY RESPOND BY MARCH 1ST, 2020</p>
			  </Col>
		  </Row>
	  	<Row>
        <form className="contact-form">
		<Col size='l6 m6 s6 selector'>
		<p>ATTENDING?:</p>
          	<div className="input-field">
				<select 
				className='attending-answer' 
				name='attendingAnswer' 
				onChange={this.handleInputChange}>
				<option value="" disabled selected>Select</option>
				<option value="Yes">Yes</option>
				<option value="No">No</option>
				</select>
			</div>
		</Col>
	
		<Col size='l6 m6 s6 selector'>
		<p>HOW MANY?:</p>
          	<div className="input-field selector">
				<select 
				className='guest-count-select' 
				name='numOfGuests' 
				onChange={this.handleInputChange}>
				<option value="" disabled selected>Select</option>
				<option value="0">0</option>
				<option value="1">1</option>
				<option value="2">2</option>
				</select>
          	</div>
		</Col>
		<Col size='l12 m12 s12'>
			<p>GUEST ONE:</p>
		</Col>
		<Col size='l6 m6 s12 input-field'>
			<input
				value={this.state.firstName}
				name="firstName"
				onChange={this.handleInputChange}
				type="text"
				placeholder='First Name'
			/>
		  </Col>
		  <Col size='l6 m6 s12 input-field'>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
		  </Col>
		  <Col size='l12 m12 s12'>
			<p>GUEST TWO:</p>
		</Col>
		  <Col size='l6 m6 s12 input-field'>
          <input
            value={this.state.firstName2}
            name="firstName2"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
		  </Col>
		  <Col size='l6 m6 s12 input-field'>
          <input
            value={this.state.lastName2}
            name="lastName2"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
		  </Col>
		  <Col size='l6 m6 s12 input-field'>
		  <p>EMAIL:</p>
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
		  </Col>
		  <Col size='l6 m6 s12 input-field'>
		  <p>MESSAGE:</p>
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
			className='materialize-textarea'
          />
		  </Col>
		  <Row>
		  <Col size='l12 m12 s12 submit-button'>
          <button onClick={this.handleFormSubmit}>RSVP</button>
		  </Col>
		  </Row>
		  
        </form>
		</Row>
      </Container>
	  </div>
    );
  }
}

export default RSVPForm;