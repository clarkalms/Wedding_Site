import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Row, Col } from '../Grid';
import './style.css';

export default class Countdown extends Component {
	state = {
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined,
	};

	componentDidMount() {
		this.interval = setInterval(() => {
			const { weddingDate, timeFormat } = this.props;
			const weddingTime = moment(weddingDate, timeFormat);
			const currentTime = moment.tz('Europe/Berlin');
			const countdown = moment(weddingTime - currentTime);
			const days = countdown.format('DDD');
			const hours = countdown.format('HH');
			const minutes = countdown.format('mm');
			const seconds = countdown.format('ss');
			this.setState({ days, hours, minutes, seconds });
			console.log('wedding date/time: ', days);
		}, 1000);
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render() {
		const { days, hours, minutes, seconds } = this.state;
		const daysRadius = mapNumber(days, 365, 0, 0, 360);
		const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
		const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
		const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

		if (!seconds) {
			return null;
		}

		return (
			<div>
				<Row>
					<div className="countdown-title-div">
						<p className="countdown-title-p">
							<span className="i-do"></span> 07.07.2022
						</p>
					</div>
				</Row>
				<Row>
					<div className="countdown-wrapper">
						{daysRadius ? (
							<Col size="l3 m3 s6">
								{days && (
									<div className={'countdown-item-wrapper'}>
										<div className="countdown-item">
											<SVGCircle radius={daysRadius} />
											{days}
										</div>
										<div className={'countdown-label-wrapper'}>
											<span className={'countdown-label'}>days</span>
										</div>
									</div>
								)}
							</Col>
						) : null}
						<Col size="l3 m3 s6">
							{hours && (
								<div className={'countdown-item-wrapper'}>
									<div className="countdown-item">
										<SVGCircle radius={hoursRadius} />
										{hours}
									</div>
									<div className={'countdown-label-wrapper'}>
										<span className={'countdown-label'}>hours</span>
									</div>
								</div>
							)}
						</Col>
						<Col size="l3 m3 s6">
							{minutes && (
								<div className={'countdown-item-wrapper'}>
									<div className="countdown-item">
										<SVGCircle radius={minutesRadius} />
										{minutes}
									</div>
									<div className={'countdown-label-wrapper'}>
										<span className={'countdown-label'}>minutes</span>
									</div>
								</div>
							)}
						</Col>
						<Col size="l3 m3 s6">
							{seconds && (
								<div className={'countdown-item-wrapper'}>
									<div className="countdown-item">
										<SVGCircle radius={secondsRadius} />
										{seconds}
									</div>
									<div className={'countdown-label-wrapper'}>
										<span className={'countdown-label'}>seconds</span>
									</div>
								</div>
							)}
						</Col>
					</div>
				</Row>
			</div>
		);
	}
}

const SVGCircle = ({ radius }) => (
	<svg className="countdown-svg">
		<path
			fill="none"
			stroke="grey"
			strokeWidth="4"
			d={describeArc(50, 50, 48, 0, radius)}
		/>
	</svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
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
		end.y,
	].join(' ');

	return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
	return (
		((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
}
