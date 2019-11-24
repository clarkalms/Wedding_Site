import React, { Component } from 'react';
import Countdown from '../Countdown';

export default class Jumbotron extends Component {
  render() {
    return (
      <Countdown 
          weddingDate="09-08-2020 14:00:00"
          timeFormat="MM-DD-YYYY HH:mm:ss"
      />
    );
  }
}
