import React, { Component } from 'react';
import { Row, Col } from '../Grid';
import './style.css';

export default class Card extends Component {
	render() {
		return (
			<Col size="l12 m12 s12">
				<div className="wedding-party-wrapper">
					<Row>
						<Col size="l3 m3 s12">
							<div className="friend-pic-div">
								<img
									src={this.props.picture}
									className="friend-pic"
									alt={this.props.name}
								/>
							</div>
						</Col>
						<Col size="l9 m9 s12">
							<div
								className="friend-name"
								style={{
									color: 'grey',
								}}
							>
								<strong>{this.props.name}</strong>
							</div>
							<div
								className="friend-position"
								style={{
									color: 'grey',
								}}
							>
								<strong>{this.props.position}</strong>
							</div>
							<div
								className="friend-info"
								style={{
									color: 'grey',
								}}
							>
								<p>{this.props.info}</p>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		);
	}
}
