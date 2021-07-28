import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron/index';
import { GalleryImages } from '../images/GalleryImages';
// import Countdown from '../components/Countdown';
// import { Row } from '../components/Grid';

class Home extends Component {
	render() {
		return (
			<div
				className="home-page-wrapper"
				style={{
					backgroundImage: `url(${GalleryImages[9].src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'top',
					backgroundRepeat: 'none',
					height: '100vh',
					width: '100%',
					opacity: '.95',
				}}
			>
				<Jumbotron />
				{/* <div
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
							weddingDate="07-06-2022 16:00:00"
							timeFormat="MM-DD-YYYY HH:mm:ss"
						/>
					</Row>
				</div> */}
			</div>
		);
	}
}

export default Home;
