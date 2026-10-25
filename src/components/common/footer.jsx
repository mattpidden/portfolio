import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer">
				<nav className="footer-links" aria-label="Legal">
					<ul className="footer-nav-link-list">
						<li>
							<Link to="/portfolio/privacy">Privacy</Link>
						</li>
						<li>
							<Link to="/portfolio/terms">Terms</Link>
						</li>
						<li>
							<Link to="/portfolio/accessibility">Accessibility</Link>
						</li>
					</ul>
				</nav>

				<div className="footer-credits">
					<p className="footer-credits-text">
						© {new Date().getFullYear()} {INFO.main.name}
					</p>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
