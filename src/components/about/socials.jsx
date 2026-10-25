import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			

			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noopener noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">
						View my GitHub<span className="visually-hidden"> (opens in a new tab)</span>
					</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">
						View my LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
					</div>
				</a>
			</div>

			<div className="social">
					<a href={`mailto:${INFO.main.email}`}>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
			</div>

			<div className="social">
				<a
					href={"Matthew Pidden CV.pdf"}
					download={"Matthew Pidden CV.pdf"}
				>
					<div className="social-icon">
						<FontAwesomeIcon icon={faFile} className="social-icon" />
					</div>

					<div className="social-text">Download CV / Resume (PDF)</div>

				</a>
			</div>
		</div>
	);
};

export default Socials;
