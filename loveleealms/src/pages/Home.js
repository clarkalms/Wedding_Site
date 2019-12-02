import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron/index';
import HomeImage from '../images/Wedding_Home.jpg';
import { Container } from '../components/Grid';

class Home extends Component {
    
    render(){
        return (
    

            
            <div
            style={{ 
                backgroundImage: `url(${HomeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundAttachment: 'fixed',
                height: '715px',
                }}
            >
                <Container>
                    <Jumbotron />
                </Container>
                
                
            </div>
            
        )
    }
}


export default Home;