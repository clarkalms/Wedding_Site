import React, { Component } from 'react';
import { Row } from '../Grid';
import Friends from './friends.js';
import Card from '../Card';
import './style.css';


export default class WeddingParty extends Component {

    state = {
        Friends: Friends
    }
  render() {
    return (
        <Row>
        {this.state.Friends.map(friend => (
            <Card
                picture={friend.picture}
                name={friend.name}
                position={friend.position}
                info={friend.info}

            />
        
            ))}
    </Row>
    );
  }
}