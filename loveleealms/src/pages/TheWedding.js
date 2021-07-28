import React, { Component } from 'react';
import { Container, Row, Col } from '../components/Grid';
import VillaImage from '../images/Wedding_Home.jpg';
import WeddingParty from '../components/WeddingParty';
class TheWedding extends Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: '#002f59',
					borderRadius: '3px',
					// margin: '50px 0',
				}}
			>
				{/* <Row> */}
				{/* <Col size="l12 m12 s12">
							<p
								style={{
									textAlign: 'center',
									color: 'grey',
									fontSize: '30px',
								}}
							>
								THE WEDDING
							</p>
						</Col> */}
				{/* </Row>
				<Row>
					<Col size="l12 m12 s12"> */}
				<div
					style={{
						backgroundImage: `url(${VillaImage})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						height: '650px',
						width: '100vw',
						backgroundRepeat: 'no-repeat',
						opacity: '0.9',
						marginBottom: '50px',
					}}
				>
					<div
						style={{
							textAlign: 'center',
							color: '#f3f2f2',
							position: 'relative',
							height: '100%',
							width: '100%',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: '70%',
								left: '50%',
								transform: 'translateX(-50%)',
							}}
						>
							<h4
								style={{
									color: '#f3f2f2',
									fontWeight: '700',
									width: '100vw',
									padding: '0 40px',
									lineHeight: '40px',
								}}
							>
								VILLA IL POGGIALE
							</h4>
							<h5
								style={{
									color: '#f3f2f2',
									fontWeight: '700',
									width: '100vw',
									padding: '0 20px',
								}}
							>
								FLORENCE, ITALY
							</h5>
						</div>
					</div>
				</div>
				{/* </Col>
				</Row> */}
				<Container>
					<Row>
						<Col size="l6 m6 s12">
							<div
								style={{
									paddingBottom: '20px',
									color: '#f3f2f2',
								}}
							>
								<h6 style={{ color: '#ce9c3c' }}>CEREMONY</h6>
								<p>
									The ceremony will be held on Thursay, July 7th, 2022 at four
									o'clock in the afternoon at: <p>Villa il Poggiale</p>{' '}
									<p>
										Via Empolese, 69, 50026 San Casciano in Val di pesa
										Florence, Italy
									</p>
								</p>{' '}
							</div>
						</Col>
						<Col size="l6 m6 s12">
							<div
								style={{
									paddingBottom: '20px',
									color: '#f3f2f2',
								}}
							>
								<h6 style={{ color: '#ce9c3c' }}>RECEPTION</h6>
								<p>
									Following the ceremony, there will be a cocktail hour in the
									vineyards at half past four o'clock in the afternoon.
								</p>
								<p>
									A reception of appetizers, dinner, drinks, and dancing will
									start at six o'clock in the evening.
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<div
							style={{
								textAlign: 'center',
								borderBottom: '1px solid #ce9c3c',
								marginBottom: '20px',
							}}
						>
							<p
								style={{
									marginBottom: '40px',
									textAlign: 'center',
									color: '#f3f2f2',
									fontSize: '30px',
								}}
							>
								WEDDING PARTY
							</p>
						</div>
					</Row>
					<WeddingParty />
				</Container>
			</div>
		);
	}
}

export default TheWedding;
