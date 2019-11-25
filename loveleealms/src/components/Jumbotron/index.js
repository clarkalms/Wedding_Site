import React, { Component } from 'react';
import Countdown from '../Countdown';
import { Row, Col } from '../Grid';
import './style.css';
export default class Jumbotron extends Component {
	render() {
		return (
			<div className='jumbotron'>
				<Row>
					<Col size='l12 m12 s12'>
						<div className='title'>
							<span className='title'>JEEWON & CLARK</span>
						</div>
					</Col>
				</Row>
				<Row>
					<Col size='l12 m12 s12'>
						<div className='location'>
							<span className='location'>Florence, Italy</span>
						</div>
					</Col>
				</Row>
				<Row>
					<Col size='l12 m12 s12'>
						<div className='date'>
							<span className='wedding-date'>09.09.2020</span>
						</div>
					</Col>
				</Row>
				<Row>
				<Countdown 
					weddingDate="09-08-2020 14:00:00"
					timeFormat="MM-DD-YYYY HH:mm:ss"
				/>
				</Row>
			</div>
			
		);
	}
}
