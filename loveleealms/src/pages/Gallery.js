import React, { Component } from "react";
import { Container, Row, Col } from '../components/Grid';
import GalleryCard from '../components/GalleryCard';
import GalleryImages from '../images/GalleryImages';

class Gallery extends Component {

    state = {
        Images: GalleryImages
    }

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
                                fontSize: '30px'
                            }}>GALLERY</p>
                        </Col>
                        </Row>
                        <Row>
                            {this.state.Images.map(images => (
                                    
                            <Col size="l6 m6 s12">
                                <GalleryCard
                                    key={images.id}
                                    id={images.id}
                                    image={images.pic}
                                    href={images.href}
                                >
                                </GalleryCard>
                            </Col>
                            
                                ))}
                        </Row>
                        <Row>
                            <div style={{
                                height: '30px'
                            }}>
                                
                            </div>
                        </Row>
                    </div>
                </Container>

        )
    }
}


export default Gallery;