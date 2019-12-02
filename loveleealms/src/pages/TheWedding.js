import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import VillaImage from '../images/Wedding_Home.jpg';
import WeddingParty from "../components/WeddingParty";
class TheWedding extends Component {
    
    render(){
        return (
            <Container>
              
                <Row>
                    <Col size='l12 m12 s12'>
                        <div style={{
                            backgroundImage: `url(${VillaImage})`, 
                            height: '400px', 
                            width: '100%', 
                            marginTop: '75px'}}>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='l12 m12 s12'>
                        <div style={{
                            textAlign: 'center'
                            }}>
                        <h4>VILLA IL POGGIALE</h4>
                        <h6>FLORENCE, ITALY</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='l12 m12 s12'>
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <p>The wedding will be held on Wednesday, September 9th, 2020. Both the ceremony and reception will be held at Villa il Poggiale. Dress code will be black tie optional.</p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col size='l6 m6 s12'>
                        <div style={{
                            borderBottom: '1px solid rgb(214, 214, 214)',
                            paddingBottom: '20px'
                        }}>
                        <h6>CEREMONY</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Col>
                    <Col size='l6 m6 s12'>
                        <div style={{
                            borderBottom: '1px solid rgb(214, 214, 214)',
                            paddingBottom: '20px'
                        }}>
                        <h6>RECEPTION</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Col>
                </Row>
                <WeddingParty />
            </Container>
        )
    }
}


export default TheWedding;