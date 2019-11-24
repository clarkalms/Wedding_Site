import React, { Component } from 'react';
// import moment from 'react-moment';
// import moment from 'moment';
import moment from 'moment-timezone';

export default class Countdown extends Component {
  state = {
    // timeTillDate: "",
    // timeFormat: "",
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
};

componentDidMount() {
    this.interval = setInterval(() => {
        const { weddingDate, timeFormat } = this.props;
        const weddingTime = moment(weddingDate, timeFormat);
        const currentTime = moment.tz('Europe/Florence');
        console.log("weddingTime: " + weddingTime + " currentTime: " + currentTime);
        const countdown = moment(weddingTime - currentTime);
        console.log("countdown: " + countdown);
        const days = countdown.format('DDD');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        this.setState({ days, hours, minutes, seconds });
    }, 1000);
}

componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
}

render() {
    const { days, hours, minutes, seconds } = this.state;
  
    return (
        <div>
            <h1>Countdown</h1>
            <div className="countdown-wrapper">
                <div className="countdown-item">
                    {days}
                    <span>days</span>
                </div>
                <div className="countdown-item">
                    {hours}
                    <span>hours</span>
                </div>
                <div className="countdown-item">
                    {minutes}
                    <span>minutes</span>
                </div>
                <div className="countdown-item">
                    {seconds}
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
}
}
