import React, { Component } from 'react';
import { Row, Col } from '../Grid';
import Countdown from '../Countdown';
import HomeImage from '../../images/Villa_il_Poggiale.jpg';
import './style.css';
export default class Jumbotron extends Component {
	render() {
		return (
            <div>
            <div>
            <Row>
                <Col size='l12 m12 s12'>
                    <div className='title'>
                        <span>JEEWON & CLARK</span>
                    </div>
                </Col>
            </Row>
                {/* <Row>
					<Col size='l5 m4 s12'>
						<div className='title' id='jeewon'>
							<span className='title-jeewon'>JEEWON</span>
						</div>
					</Col>
					<Col size='l2 m4 s12 ampersand'>
						<div className='title' id='ampersand' >
							<span className='title-ampersand'>&</span>
						</div>
					</Col>
					<Col size='l5 m4 s12'>
						<div className='title' id='clark'>
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
				</Row> */}
            </div>
			<div className='jumbotron'
				style={{ 
                backgroundImage: `url(${HomeImage})`,
				backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                height: '400px', 
                width: '100%', 
                borderRadius: '3px',
			}}>
                <Row>
                <Col size='l12 m12 s12'>
                    <div className='location'>
                        <span>FLORENCE, ITALY</span>
                    </div>
                </Col>
                <Col size='l12 m12 s12'>
                    <div className='date'>
                        <span>09.09.2020</span>
                    </div>
                </Col>
                </Row>
            </div>
            </div>
			
		);
	}
}
