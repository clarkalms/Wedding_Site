import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './style.css';

// import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
	componentDidMount() {
		// const elems = document.querySelectorAll('.sidenav');
		// M.Sidenav.init(elems);
		M.AutoInit();
	}
	render() {
		console.log('window pathname', window.location.pathname);

		return (
			<div>
				<div className="navbar">
					<nav>
						<div className="nav-wrapper">
							<div className="logo-wrapper">
								<a href="/" className="brand-logo center">
									JEEWON & CLARK
								</a>
							</div>
							<div className="nav-list-wrapper">
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href="#" data-target="mobile" className="sidenav-trigger">
									<i className="material-icons">menu</i>
								</a>
								<ul className="center hide-on-med-and-down">
									<li className="nav-item">
										<Link
											to="/gallery"
											className={
												window.location.pathname === '/gallery'
													? 'nav-link active'
													: 'nav-link'
											}
										>
											GALLERY
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/thewedding"
											className={
												window.location.pathname === '/thewedding'
													? 'nav-link active'
													: 'nav-link'
											}
										>
											THE WEDDING
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/travel"
											className={
												window.location.pathname === '/travel'
													? 'nav-link active'
													: 'nav-link'
											}
										>
											TRAVEL
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/registry"
											className={
												window.location.pathname === '/registry'
													? 'nav-link active'
													: 'nav-link'
											}
										>
											REGISTRY
										</Link>
									</li>
									<li className="nav-item rsvp">
										<Link
											to="/rsvp"
											className={
												window.location.pathname === '/rsvp'
													? 'nav-link active'
													: 'nav-link'
											}
										>
											RSVP
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<ul className="sidenav" id="mobile">
					<li className="sidenav-close nav-item">
						<Link
							to="/"
							className={
								window.location.pathname === '/'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							HOME
						</Link>
					</li>
					<li className="sidenav-close nav-item">
						<Link
							to="/gallery"
							className={
								window.location.pathname === '/gallery'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							GALLERY
						</Link>
					</li>
					<li className="sidenav-close nav-item">
						<Link
							to="/thewedding"
							className={
								window.location.pathname === '/thewedding'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							THE WEDDING
						</Link>
					</li>
					<li className="sidenav-close nav-item">
						<Link
							to="/travel"
							className={
								window.location.pathname === '/travel'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							TRAVEL
						</Link>
					</li>
					<li className="sidenav-close nav-item">
						<Link
							to="/registry"
							className={
								window.location.pathname === '/registry'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							REGISTRY
						</Link>
					</li>
					<li className="sidenav-close nav-item">
						<Link
							to="/rsvp"
							className={
								window.location.pathname === '/rsvp'
									? 'nav-link active'
									: 'nav-link'
							}
						>
							RSVP
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
