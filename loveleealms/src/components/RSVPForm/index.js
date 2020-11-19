import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import emailjs from 'emailjs-com';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';

const initialState = {
	firstName: '',
	lastName: '',
	firstName2: '',
	lastName2: '',
	email: '',
	message: '',
	numOfGuests: 'Select',
	attendingAnswer: 'Select',
};
class RSVPForm extends Component {
	state = initialState;

	componentDidMount() {
		var elem = document.querySelectorAll('select');
		M.FormSelect.init(elem, {
			dropdownOptions: {
				Select: 'Select',
				0: '0',
				1: '1',
				2: '2',
			},
		});
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		var elem = document.querySelectorAll('.guest-count-select');
		M.FormSelect.getInstance(elem);
		let isValid = this.validate();
		if (isValid) {
			this.sendEmail();
			this.submissionAlert();
			this.setState(initialState);
		}
	};
	sendEmail = (e) => {
		var template_params = {
			attendingAnswer: this.state.attendingAnswer,
			numOfGuests: this.state.numOfGuests,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			firstName2: this.state.firstName2,
			lastName2: this.state.lastName2,
			email: this.state.email,
			message: this.state.message,
		};
		emailjs
			.send(
				'gmail',
				'template_RKaPY28P',
				template_params,
				'user_HH95xqARzcJyFjdXFLu6p'
			)
			.then(
				(result) => {},
				(error) => {}
			);
	};

	validate = () => {
		if (this.state.attendingAnswer === 'Select') {
			alert('Please select "Yes" or "No" under "Attending?".');
			return false;
		}
		if (this.state.numOfGuests === 'Select') {
			alert('Please select the number of guests attending.');
			return false;
		}
		if (!this.state.firstName) {
			alert('Please enter a first name to "Guest One".');
			return false;
		}
		if (!this.state.lastName) {
			alert('Please enter a last name to "Guest One".');
			return false;
		}
		if (
			this.state.attendingAnswer === 'Yes' &&
			this.state.numOfGuests === '0'
		) {
			alert('Please adjust the number of guests attending.');
			return false;
		}
		if (this.state.numOfGuests < 2 && this.state.firstName2) {
			alert(
				'Please adjust the number of guests attending if you are bringing a guest.'
			);
			return false;
		}
		if (this.state.numOfGuests < 2 && this.state.firstName2) {
			alert(
				'Please adjust the number of guests attending if you are bringing a guest.'
			);
			return false;
		}
		if (this.state.numOfGuests === 2 && !this.state.firstName2) {
			alert(
				'Please enter a first name to "Guest Two" or adjust the number of guests attending.'
			);
			return false;
		}
		if (this.state.numOfGuests === 2 && !this.state.lastName2) {
			alert(
				'Please enter a last name to "Guest Two" or adjust the number of guests attending.'
			);
			return false;
		}
		if (!this.state.email.includes('@')) {
			alert('Please enter a valid email address.');
			return false;
		}
		return true;
	};

	submissionAlert = () => {
		if (this.state.attendingAnswer === 'Yes') {
			alert(
				`Thank you for your response ${this.state.firstName}. We are looking forward to seeing you in Italy!`
			);
		} else if (this.state.attendingAnswer === 'No') {
			alert(
				`Thank you for your response ${this.state.firstName}. We are sorry to hear that you can't make it. Hope to see you sometime soon!`
			);
		}
	};

	render() {
		return (
			<div className="rsvp-wrapper">
				<Container>
					<Row>
						<Col size="l12 m12 s12 rsvp-title">
							<p>THANK YOU FOR RESPONDING BY JULY 31st, 2020.</p>
							<p>WE LOOK FORWARD TO SEEING YOU THERE!</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default RSVPForm;
