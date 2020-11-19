import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/index';
import Countdown from '../components/Countdown';
import { Row } from '../components/Grid';

class Home extends Component {
	render() {
		return (
			<div>
				{/* <Container> */}
				<div
					style={{
						backgroundColor: 'rgb(238, 238, 238)',
						borderRadius: '3px',
						padding: '30px 25px',
						margin: '50px 0',
					}}
				>
					<Jumbotron />
					<Row>
						<Countdown
							weddingDate="06-22-2021 14:00:00"
							timeFormat="MM-DD-YYYY HH:mm:ss"
						/>
					</Row>
				</div>
				{/* </Container> */}
			</div>
		);
	}
}

export default Home;
