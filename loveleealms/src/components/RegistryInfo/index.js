import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import Zola from '../../images/Zola.JPEG';
import './style.css';
export default class RegistryInfo extends Component {
  render() {
    return (
        <Container>
        <div className='registry-wrapper'>
            <Row>
                <h4 className="registry-title">REGISTRY</h4>
                
            </Row>
            <Row>
                <Col size='l12 m12 s12'>
                    <p className='registry-info'>PLEASE CLICK THE LINK BELOW TO SEE OUR REGISTRY.</p>
                </Col>
                <Col size='l12 m12 s12'>
                    <div className='zola-div'>
                        <a href="https://www.zola.com/registry/jeewonandclark">
                        <img src={Zola} className='zola-img'></img>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
    );
  }
}
