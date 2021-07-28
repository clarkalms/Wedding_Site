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
						// backgroundColor: 'rgb(238, 238, 238)',
						// padding: '30px 15px 25px 15px',
						marginTop: '80px',
					}}
				>
					<Row>
						<Col size="l12 m12 s12">
							<p
								style={{
									textAlign: 'center',
									color: '#ce9c3c',
									fontSize: '20px',
									marginTop: '70px',
								}}
							>
								{/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
								<span style={{ fontSize: '20px' }}>&#128248;</span>
								{' @'}
								<a
									href={'https://zoerainphoto.com/'}
									target={'_blank'}
									style={{
										color: '#ce9c3c',
									}}
								>
									zoerainphoto
								</a>
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
