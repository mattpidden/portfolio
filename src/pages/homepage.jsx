import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import Contact from "../components/contact/contact";

const Homepage = () => {
	const [logoSize] = useState(80);
	const [oldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container" id="homepage-logo-container">
						
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<span>{INFO.homepage.titlepart1}</span>
									<span className="homepage-title-name">{INFO.main.name}</span>
									<br></br>
									<span>{INFO.homepage.titlepart2}</span>
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
									<img src={require('./portraitpic.jpg')} alt="Portrait" className="homepage-image"/>

									
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
									className="github-tooltip"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<Tooltip anchorSelect=".github-tooltip" place="top">
									View my GitHub
								</Tooltip>
							</>
							<>
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
									className="linkedin-tooltip"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										className="homepage-social-icon"
									/>
								</a>
								<Tooltip anchorSelect=".linkedin-tooltip" place="top">
									View my LinkedIn
								</Tooltip>
							</>
							<>
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
									className="email-me-tooltip"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
								<Tooltip anchorSelect=".email-me-tooltip" place="top">
									Email Me
								</Tooltip>
							</>
							<>
								<a
									href={"/Matthew Pidden CV.pdf"}
									download={"Matthew Pidden CV.pdf"}
									className="download-cv-tooltip"
								>
									<FontAwesomeIcon
										icon={faFile}
										className="homepage-social-icon"
									/>
								</a>
								<Tooltip anchorSelect=".download-cv-tooltip" place="top">
									Download CV / Resume
								</Tooltip>
							</>
						</div>

						<div className="homepage-projects" id="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-contact" id="homepage-contact">
							<Contact />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
