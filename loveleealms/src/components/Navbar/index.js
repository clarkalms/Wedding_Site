import React, {Component} from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import './style.css';

class Navbar extends Component {

    componentDidMount(){
            var elems = document.querySelector('.sidenav');
            var instance = M.Sidenav.init(elems, {
                edge: "left",
                draggable: true,
                inDuration: 250
            });
            instance.close();
    }

    render() {
        return (
            <div className='navbar-fixed'>
                <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo">JEEWON & CLARK</a>
                    <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li className="nav-item">
                            <Link
                            to="/"
                            className={
                                window.location.pathname === "/" ? "nav-link active" : "nav-link"
                            }
                            >
                            HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            to="/gallery"
                            className={
                                window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"
                            }
                            >
                            GALLERY
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            to="/thewedding"
                            className={
                                window.location.pathname === "/thewedding" ? "nav-link active" : "nav-link"
                            }
                            >
                            THE WEDDING
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            to="/travel"
                            className={
                                window.location.pathname === "/travel" ? "nav-link active" : "nav-link"
                            }
                            >
                            TRAVEL
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            to="/registry"
                            className={
                                window.location.pathname === "/registry" ? "nav-link active" : "nav-link"
                            }
                            >
                            REGISTRY
                            </Link>
                        </li>
                        <li className="nav-item rsvp">
                            <Link
                            to="/rsvp"
                            className={
                                window.location.pathname === "/rsvp" ? "nav-link active" : "nav-link"
                            }
                            >
                            RSVP
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile">
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/"
                        className={
                            window.location.pathname === "/" ? "nav-link active" : "nav-link"
                        }
                        >
                        HOME
                        </Link>
                    </li>
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/gallery"
                        className={
                            window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"
                        }
                        >
                        GALLERY
                        </Link>
                    </li>
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/thewedding"
                        className={
                            window.location.pathname === "/thewedding" ? "nav-link active" : "nav-link"
                        }
                        >
                        THE WEDDING
                        </Link>
                    </li>
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/travel"
                        className={
                            window.location.pathname === "/travel" ? "nav-link active" : "nav-link"
                        }
                        >
                        TRAVEL
                        </Link>
                    </li>
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/registry"
                        className={
                            window.location.pathname === "/registry" ? "nav-link active" : "nav-link"
                        }
                        >
                        REGISTRY
                        </Link>
                    </li>
                    <li className="sidenav-close nav-item">
                        <Link
                        to="/rsvp"
                        className={
                            window.location.pathname === "/rsvp" ? "nav-link active" : "nav-link"
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
