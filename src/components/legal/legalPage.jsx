import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../common/footer";

import INFO from "../../data/user";

import "./styles/legalPage.css";

// Shared layout for the privacy notice, terms of use and accessibility statement
const LegalPage = ({ title, updated, children }) => {
	useEffect(() => {
		document.title = `${title} | ${INFO.main.name}`;
		window.scrollTo(0, 0);
	}, [title]);

	return (
		<div className="page-content">
			<a className="skip-link" href="#main">
				Skip to main content
			</a>
			<div className="content-wrapper">
				<header className="legal-header">
					<Link to="/portfolio/" className="legal-back-link">
						← Back to {INFO.main.name}'s portfolio
					</Link>
				</header>

				<main id="main" className="legal-main" tabIndex="-1">
					<h1 className="title legal-title">{title}</h1>
					<p className="legal-updated">Last updated: {updated}</p>
					<div className="legal-body">{children}</div>
				</main>

				<Footer />
			</div>
		</div>
	);
};

export default LegalPage;
