import React, { Component } from 'react';
import './style.css';

export default class Card extends Component {
  render() {
    return (
        <a href={this.props.href}>
        <div className="image-div" style={{backgroundImage: `url(${this.props.image})`}}>
            
            {/* <image className='image' src={this.props.image} /> */}

        </div>
        </a>
    );
  }
}

