import React, { Component } from 'react';
import './style.css';

export default class GalleryCard extends Component {
  render() {
    return (
    
          <div className='gallery-img-div'>
              <a href={this.props.href}><img className='gallery-img' src={this.props.image} id={this.props.id}></img></a>
          </div>

      
    );
  }
}
