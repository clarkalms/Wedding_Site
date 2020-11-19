import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import TheWedding from './pages/TheWedding';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app-content">
					<Wrapper>
						<Navbar />
						<Route exact path="/" component={Home} />
						<Route exact path="/gallery" component={Gallery} />
						<Route exact path="/thewedding" component={TheWedding} />
						<Route exact path="/travel" component={Travel} />
						<Route exact path="/registry" component={Registry} />
						<Route exact path="/rsvp" component={RSVP} />
						<Footer />
					</Wrapper>
				</div>
			</Router>
		);
	}
}
export default App;
