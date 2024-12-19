import React from "react";
import "./Footer.css";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="social-links">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<img src={facebookIcon} alt="Facebook" className="social-icon" />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<img src={twitterIcon} alt="Twitter" className="social-icon" />
					</a>
					<a
						href="https://fr.linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<img src={linkedinIcon} alt="Linkedin" className="social-icon" />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<img src={instagramIcon} alt="Instagram" className="social-icon" />
					</a>
				</div>
				<p className="copyright">© 2024 Tous droits réservés.</p>
			</div>
		</footer>
	);
};

export default Footer;
