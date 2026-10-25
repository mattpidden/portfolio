import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/common/navBar";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<main className="content-wrapper" id="main">
					<div className="notfound-logo-container">
						
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<h1 className="notfound-title">
								Oops!
							</h1>
							<p className="not-found-message">
								404 Error. This page does not exist.
							</p>
							<Link to="/portfolio/" className="not-found-link">
								Go back to the home page
							</Link>
						</div>
					</div>
				</main>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
