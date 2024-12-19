import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="logo">
					<img src={logo} alt="Galactic Love" className="logo-image" />
				</Link>
				<div className="nav-links">
					<Link to="/" className="nav-link">
						<span className="nav-text">Accueil</span>
					</Link>
					<Link to="/boutique" className="nav-link">
						<span className="nav-text">Boutique</span>
					</Link>
					<Link to="/contact" className="nav-link">
						<span className="nav-text">Contact</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
