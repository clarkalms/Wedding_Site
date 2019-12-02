import React, { Component } from 'react';
import Countdown from '../Countdown';
import { Row, Col } from '../Grid';
import HomeImage from '../../images/Wedding_Home.jpg';
import './style.css';
export default class Jumbotron extends Component {
	render() {
		return (
			<div className='jumbotron'
				style={{ 
                backgroundImage: `url(${HomeImage})`,
				backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
			}}>
				
				<Row>
					<Col size='l5 m4 s12'>
						<div className='title' id='jeewon'>
							<span className='title-jeewon'>JEEWON</span>
						</div>
					</Col>
					<Col size='l2 m4 s12 ampersand'>
						<div className='title' >
							<span className='title-ampersand'>&</span>
						</div>
					</Col>
					<Col size='l5 m4 s12'>
						<div className='title'>
							<span className='title-clark'>CLARK</span>
						</div>
					</Col>
				</Row>
				<Row>
					<Col size='l12 m12 s12'>
						<div className='location'>
							<span>FLORENCE, ITALY</span>
						</div>
					</Col>
				</Row>
				<Row>
					<Col size='l12 m12 s12'>
						<div className='date'>
							<span>09.09.2020</span>
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
