import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import VillaImage from '../images/Wedding_Home.jpg';
import WeddingParty from "../components/WeddingParty";
class TheWedding extends Component {
    
    render(){
        return (
            <Container>
            <div style={{
                backgroundColor: 'rgb(238, 238, 238)',
                borderRadius: '3px',
                padding: '30px 15px 25px 15px',
                margin: '50px 0'
            }}>
              <Row>
                    <Col size='l12 m12 s12'>
                        <p style={{
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: '30px',
                        }}>THE WEDDING</p>
                    </Col>
                    </Row>
                <Row>
                    <Col size='l12 m12 s12'>
                        <div style={{
                            backgroundImage: `url(${VillaImage})`, 
                            backgroundPosition: 'center',
                            height: '400px', 
                            width: '100%', 
                            marginTop: '5px',
                            borderRadius: '3px'}}>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='l12 m12 s12'>
                        <div style={{
                            textAlign: 'center',
                            color: 'grey'
                            }}>
                        <h4>VILLA IL POGGIALE</h4>
                        <h6>FLORENCE, ITALY</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='l6 m6 s12'>
                        <div style={{
                            paddingBottom: '20px',
                            color: 'grey'
                        }}>
                        <h6>CEREMONY</h6>
                        <p>The ceremony will be held on Wednesday, September 9th, 2020 at four o'clock in the afternoon at <p>Villa il Poggiale</p> <p>Via Empolese, 69, 50026 San Casciano in Val di pesa Florence, Italy</p></p>                        </div>
                    </Col>
                    <Col size='l6 m6 s12'>
                        <div style={{
                            paddingBottom: '20px',
                            color: 'grey'
                        }}>
                        <h6>RECEPTION</h6>
                        <p>Following the ceremony, there will be a cocktail hour in the vineyards at half past four o'clock in the afternoon.</p>
                        <p>A reception of appetizers, dinner, drinks, and dancing will start at six o'clock in the evening.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div style={{
                        textAlign: 'center',
                        borderBottom: '1px solid rgb(214, 214, 214)',
                        marginBottom: '20px'
                    }}>
                        <p style={{
                            marginBottom: '40px',
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: '30px'
                        }}>WEDDING PARTY</p>
                    </div>
                </Row>
                <WeddingParty />
                </div>
            </Container>
        )
    }
}


export default TheWedding;