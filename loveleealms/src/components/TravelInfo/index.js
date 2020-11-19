import React, { Component } from 'react';
import { Row, Col } from '../Grid';
import './style.css';

export default class TravelInfo extends Component {
	render() {
		return (
			<Row>
				<Col size="l12 m12 s12 travel-info-col">
					<h5 className="info-title">FLIGHTS</h5>
					<p className="info-content">
						When traveling to Italy, there are some travel sites we like to use
						to find great deals. Sometimes it can take a bit of shopping around
						to find the deals but below are some links of places to start:
					</p>
					<p className="flight-link">
						<a className="travel-link" href="https://www.google.com/flights">
							Google Flights
						</a>
					</p>
					<p className="flight-link">
						<a className="travel-link" href="https://www.skyscanner.com">
							Skycanner
						</a>
					</p>
					<p className="flight-link">
						<a className="travel-link" href="https://www.cheapoair.com">
							CheapOair
						</a>
					</p>
					<p className="flight-link">
						<a className="travel-link" href="https://www.expedia.com/">
							Expedia
						</a>
					</p>
				</Col>
				<Col size="l12 m12 s12 travel-info-col">
					<h5 className="info-title">ACCOMMODATIONS</h5>
					<p className="info-content">
						For those interested in staying at Villa il Poggiale, there are a
						limited number of rooms available to book for the nights of June
						22-23, 2021. If you would like to book one of these rooms, please
						reach out to us at{' '}
						<a
							className="travel-link"
							href="mailto: jeewonandclark@gmail.com?Subject=Room%20Info"
						>
							jeewonandclark@gmail.com
						</a>
					</p>
					<p className="info-content">
						There are many other great places to stay in Florence and the Tuscan
						countryside. If you are looking to stay in the City of Florence, we
						reccommend using{' '}
						<a
							className="travel-link"
							href="https://www.airbnb.com/s/Florence--Metropolitan-City-of-Florence--Italy/homes?adults=1&children=0&checkin=&checkout=&source=mc_search_bar&refinement_paths%5B%5D=%2Fhomes&place_id=ChIJrdbSgKZWKhMRAyrH7xd51ZM"
						>
							Airbnb
						</a>{' '}
						if you're not set on staying at a hotel. Be sure to select the
						"entire place" filter when searching to ensure your privacy.
					</p>
					<p className="info-content">
						If you decide to stay in the city, we will be providing a shuttle to
						and from the Villa on the day of the wedding. We will update you
						with the time and location of shuttle pick-up and drop-off closer to
						June, 2021.
					</p>
				</Col>
				<Col size="l12 m12 s12 travel-info-col">
					<h5 className="info-title">TIPS & TRICKS</h5>
					<p className="info-content">
						When searching for flights (and are not looking to fly First Class
						non-stop), tickets to cities other than Florence tend to be cheaper.
						For our trips, we have flown into Rome and taken a €25 roundtrip
						train ride into Florence. This helps save on costs and is a scenic
						trip though Tuscany.
					</p>
					<p className="info-content">
						Be sure to bring a few Euros with you as Italy does charge a €3.50
						tax per night per person when booking rooms. Most Airbnb's require
						the tax to be paid in cash, although hotels usually include it in
						the cost of the room rental.
					</p>
					<p className="info-content">
						Having visited Florence in June already, we are here to tell you
						from experience to bring an insect repelent and/or anti-itch cream.
						There will be special candles out to deter these unwanted visitors,
						but the venue is outdoors in the countryside.
					</p>
					<p className="info-content">
						The weather around this time is usually quite nice. Feel free to
						take a look at{' '}
						<a
							className="travel-link"
							href="https://www.accuweather.com/en/it/florence/216189/june-weather/216189?year=2021"
						>
							AccuWeather
						</a>{' '}
						to get an idea of what to pack.
					</p>
				</Col>
				<Col size="l12 m12 s12 travel-info-col">
					<h5 className="info-title">LOCAL TRAVEL</h5>
					<p className="info-content">
						As is the case with most major cities, the most convenient ways of
						getting around are walking and taking taxis. If you are planning on
						exploring at all, be sure to bring comfortable shoes (Clark will
						never make the mistake of choosing the wrong shoes again...).
					</p>
					<p className="info-content">
						If you decide on using Europe's convenient rail system thoughout
						your travels, look into using{' '}
						<a className="travel-link" href="https://www.omio.com/">
							Omio
						</a>{' '}
						for a convenient method of puchasing and organizing your train
						tickets. You can also download the app for your phone. Train tickets
						are usually cheaper the earlier you purchase them.
					</p>
				</Col>
			</Row>
		);
	}
}
