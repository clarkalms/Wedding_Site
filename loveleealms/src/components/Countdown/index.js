import React, { Component } from 'react';
import Moment from 'react-moment';

export default class Countdown extends Component {
  render() {
    return (
        <Moment format="YYYY/MM/DD">{}</Moment>
    );
  }
}
