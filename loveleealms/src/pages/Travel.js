import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import Italy from "../images/Italy.png";
import Florence from "../images/Florence.png";
import TravelInfo from "../components/TravelInfo";
class Travel extends Component {
    
    render(){
        return (
            <Container>
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
                        <div>
                            <img src={Italy} style={{
                                height: 'auto',
                                maxWidth: '100%',
                                marginBottom: '25px',
                                borderRadius: '3px',
                                border: '6px solid rgb(212,175,55)'
                            }}>
                            </img>
                        </div>
                    </Col>
                    <Col size='lg6 m6 s12'>
                        <div>
                            <img src={Florence} style={{
                                height: 'auto',
                                maxWidth: '100%',
                                marginBottom: '25px',
                                borderRadius: '3px',
                                border: '6px solid rgb(212,175,55)'
                            }}>
                            </img>
                        </div>
                    </Col>
                </Row>
                <TravelInfo />
            </Container>
        )
    }
}


export default Travel;