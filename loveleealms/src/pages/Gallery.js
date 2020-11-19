import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import GalleryImages from '../images/GalleryImages';
import Gallery from 'react-grid-gallery';

class GalleryScreen extends Component {
	state = {
		Images: GalleryImages,
	};

	render() {
		return (
			<Container>
				<div
					style={{
						backgroundColor: 'rgb(238, 238, 238)',
						borderRadius: '3px',
						padding: '30px 15px 25px 15px',
						margin: '50px 0',
					}}
				>
					<Row>
						<Col size="l12 m12 s12">
							<p
								style={{
									textAlign: 'center',
									color: 'grey',
									fontSize: '30px',
								}}
							>
								GALLERY
							</p>
						</Col>
					</Row>
					<Row>
						<Gallery
							images={GalleryImages}
							enableImageSelection={false}
							rowHeight={400}
							margin={20}
							backdropClosesModal={true}
						/>
					</Row>
					<Row>
						<div
							style={{
								height: '30px',
							}}
						></div>
					</Row>
				</div>
			</Container>
		);
	}
}

export default GalleryScreen;
