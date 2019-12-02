import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import Friends from './friends.js';
import './style.css';


export default class WeddingParty extends Component {

    state = {
        Friends: Friends
    }
  render() {
    return (
        <Row>
        {this.state.Friends.map(friend => (
                
            <Col size='l6 m6 s12'>
                <div className="friend-pic-div">
                    <img src={friend.picture} className="friend-pic" />    
                </div>
                <div className="friend-name">
                    <strong>{friend.name}</strong>
                </div>
                <div className="friend-position">
                    <strong>{friend.position}</strong>
                </div>
                <div className="friend-info">
                    <p>{friend.info}</p>
                </div>
            </Col>
        
            ))}
    </Row>
    );
  }
}
