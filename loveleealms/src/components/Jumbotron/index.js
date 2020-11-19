import React, { Component } from 'react';
import { Row, Col } from '../Grid';
import HomeImage from '../../images/Villa_il_Poggiale.jpg';
import './style.css';
export default class Jumbotron extends Component {
	render() {
		return (
			<div>
				<div>
					<Row>
						<Col size="l12 m12 s12">
							<div className="title">
								<span>JEEWON & CLARK</span>
							</div>
						</Col>
					</Row>
				</div>
				<div
					className="jumbotron"
					style={{
						backgroundImage: `url(${HomeImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'none',
						height: '400px',
						width: '100%',
						borderRadius: '3px',
					}}
				>
					<Row>
						<Col size="l12 m12 s12">
							<div className="location">
								<span>FLORENCE, ITALY</span>
							</div>
						</Col>
						<Col size="l12 m12 s12">
							<div className="date">
								<span>06.23.2021</span>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
