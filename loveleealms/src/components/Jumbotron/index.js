import React, { Component } from 'react';
import { Row, Col } from '../Grid';
// import HomeImage from '../../images/Villa_il_Poggiale.jpg';
// import { GalleryImages } from '../../images/GalleryImages';
import './style.css';
export default class Jumbotron extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	render() {
		return (
			<div>
				{/* <div>
					<Row>
						<Col size="l12 m12 s12">
							<div className="title">
								<span>JEEWON & CLARK</span>
							</div>
						</Col>
					</Row>
				</div> */}
				<div
					className="jumbotron"
					// style={{
					// 	backgroundImage: `url(${GalleryImages[9].src})`,
					// 	backgroundSize: 'cover',
					// 	backgroundPosition: 'center',
					// 	backgroundRepeat: 'none',
					// 	height: this.state.height,
					// 	width: '100%',
					// 	borderRadius: '3px',
					// 	opacity: '1',
					// }}
				>
					<Row>
						<Col size="l12 m12 s12">
							<div className="location">
								<span>FLORENCE, ITALY</span>
							</div>
						</Col>
						<Col size="l12 m12 s12">
							<div className="date">
								<span>07.07.2022</span>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
