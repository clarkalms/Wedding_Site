import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Row, Col } from '../Grid';
import './style.css';

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

// render() {
//     const { days, hours, minutes, seconds } = this.state;
  
//     return (
        
//             <Row>
//                 <div className="countdown-wrapper">
//                     <Col size='l3 m3 s3'>
//                         <div className="countdown-item">
//                             {days}
//                             <span>days</span>
//                         </div>
//                     </Col>
// 					<Col size='l3 m3 s3'>
//                         <div className="countdown-item">
//                             {hours}
//                             <span>hours</span>
//                         </div>
//                     </Col>
// 					<Col size='l3 m3 s3'>
//                         <div className="countdown-item">
//                             {minutes}
//                             <span>minutes</span>
//                         </div>
//                     </Col>
// 					<Col size='l3 m3 s3'>
//                         <div className="countdown-item">
//                             {seconds}
//                             <span>seconds</span>
//                         </div>
//                     </Col>
// 				</div>
//             </Row>
        
//     );
// }
// }
render() {
	const { days, hours, minutes, seconds } = this.state;
	
	// Mapping the date values to radius values
	const daysRadius = mapNumber(days, 30, 0, 0, 360);
	const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
	const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
	const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
	
	if (!seconds) {
		return null;
	}
	
	return (
		<Row>
			<div className="countdown-wrapper">
				<Col size='l3 m3 s6'>
					{days && (
						<div className="countdown-item">
							<SVGCircle radius={daysRadius} />
							{days}
							<span>days</span>
						</div>
					)}
				</Col>
				<Col size='l3 m3 s6'>
				{hours && (
					<div className="countdown-item">
						<SVGCircle radius={hoursRadius} />
						{hours}
						<span>hours</span>
					</div>
				)}
				</Col>
				<Col size='l3 m3 s6'>
				{minutes && (
					<div className="countdown-item">
						<SVGCircle radius={minutesRadius} />
						{minutes}
						<span>minutes</span>
					</div>
				)}
				</Col>
				<Col size='l3 m3 s6'>
				{seconds && (
					<div className="countdown-item">
						<SVGCircle radius={secondsRadius} />
						{seconds}
						<span>seconds</span>
					</div>
				)}
				</Col>
			</div>
		</Row>
	);
}
}

const SVGCircle = ({ radius }) => (
<svg className="countdown-svg">
	<path
		fill="none"
		stroke="white"
		stroke-width="4"
		d={describeArc(50, 50, 48, 0, radius)}
	/>
</svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

return {
	x: centerX + radius * Math.cos(angleInRadians),
	y: centerY + radius * Math.sin(angleInRadians)
};
}

function describeArc(x, y, radius, startAngle, endAngle) {
var start = polarToCartesian(x, y, radius, endAngle);
var end = polarToCartesian(x, y, radius, startAngle);
var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
var d = [
	'M',
	start.x,
	start.y,
	'A',
	radius,
	radius,
	0,
	largeArcFlag,
	0,
	end.x,
	end.y
].join(' ');

return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
return (
	((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
);
}