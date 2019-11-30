import React, { Component } from 'react';
import './style.css';

export default class Card extends Component {
  render() {
    return (
        <div className="image-div" style={{backgroundImage: `url(${this.props.image})`}}>

            {/* <image className='image' src={this.props.image} /> */}

        </div>
    );
  }
}

