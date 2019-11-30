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
                        <Col size='l12 m6 s12'>
                            <div className='title-div' style={{
                                textAlign:'center',
                                fontSize: '40px',
                                height: '50px',
                                }}>
                                <p style={{
                                    marginBottom: '0px'
                                }}>GALLERY</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.Images.map(images => (
                                
                        <Col size="l6 m6 s12">
                            <Card
                                key={images.id}
                                id={images.id}
                                image={images.pic}
                            >
                            </Card>
                        </Col>
                        
                            ))}
                    </Row>
                </Container>

        )
    }
}


export default Gallery;