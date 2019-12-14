import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron/index';
import Countdown from '../components/Countdown';
import { Container, Row } from '../components/Grid';

class Home extends Component {
    
    render(){
        return (
    

            
            <div>
                <Container>
                    <Jumbotron />
                    <Row>
				<Countdown 
					weddingDate="09-08-2020 14:00:00"
					timeFormat="MM-DD-YYYY HH:mm:ss"
				/>
				</Row>
                </Container>
                
                
                
            </div>
            
        )
    }
}


export default Home;