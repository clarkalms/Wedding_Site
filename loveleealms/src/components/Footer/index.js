import React from "react";
import { Row, Col } from '../Grid';
import "./style.css";

function Footer() {
  return (
    <div className="footer">
		<Row fluid='copyright'>
			<Col size='l12 m12 s12'>
				<span>&copy; JEEWON & CLARK 2020</span>
			</Col>
		</Row>
		<Row>
			<Col size='l12 m12 s12'>
				<a href="https://www.instagram.com/explore/tags/jeewonclark/">#jeeWONclark</a>
			</Col>
		</Row>
      
    </div>
  );
}

export default Footer;