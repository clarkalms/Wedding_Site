import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import Italy from "../images/Italy.png";
import Florence from "../images/Florence.png";
import TravelInfo from "../components/TravelInfo";
class Travel extends Component {
    
    render(){
        return (
            <Container>
                <div style={{
                backgroundColor: 'rgb(238, 238, 238)',
                borderRadius: '3px',
                padding: '30px 0 25px 0',
                margin: '50px 0'
            	}}>
					<Row>
						<Col size='l12 m12 s12'>
							<p style={{
								textAlign: 'center',
								color: 'grey',
								fontSize: '30px'
							}}>TRAVEL</p>
						</Col>
					</Row>
					<Row>
						<Col size='l6 m6 s12'>
							<div className='travel-img'>
								<img src={Italy} style={{
									height: 'auto',
									maxWidth: '90%',
									marginBottom: '25px',
									borderRadius: '3px',
									border: '5px solid white',
									boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
								}}>
								</img>
							</div>
						</Col>
						<Col size='lg6 m6 s12'>
							<div className='travel-img'>
								<img src={Florence} style={{
									height: 'auto',
									maxWidth: '90%',
									marginBottom: '25px',
									borderRadius: '3px',
									border: '6px solid white',
									boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
								}}>
								</img>
							</div>
						</Col>
					</Row>
					<TravelInfo />
                </div>
            </Container>
        )
    }
}


export default Travel;