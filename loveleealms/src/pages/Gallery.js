import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import Card from '../components/Card';
import GalleryImages from '../images/GalleryImages';

class Gallery extends Component {

    state = {
        Images: GalleryImages
    }

    render(){
        return (
      
                <Container>
                    <Row>
                    <Col size='l12 m12 s12'>
                        <p style={{
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: '30px'
                        }}>GALLERY</p>
                    </Col>
                    </Row>
                    <Row>
                        {this.state.Images.map(images => (
                                
                        <Col size="l6 m6 s12">
                            <Card
                                key={images.id}
                                id={images.id}
                                image={images.pic}
                                href={images.href}
                            >
                            </Card>
                        </Col>
                        
                            ))}
                    </Row>
                    <Row>
                        <div style={{
                            height: '30px'
                        }}>
                            
                        </div>
                    </Row>
                </Container>

        )
    }
}


export default Gallery;