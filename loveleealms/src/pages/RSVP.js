import React, { Component } from 'react';
import RSVPForm from '../components/RSVPForm';
import { Container } from '../components/Grid';
class RSVP extends Component {
	render() {
		return (
			<Container>
				<RSVPForm />
			</Container>
		);
	}
}

export default RSVP;
