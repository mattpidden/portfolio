import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMicrochip, faCode } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const toClassName = (badge) => badge.toLowerCase().replace(/\s+/g, "-");

const Project = (props) => {
	const { logos = [], badges = [], category, title, date, description, linkText, link } = props;

	const content = (
		<div className="project-container">
			<div className="project-header">
				<div className="project-logos">
					{logos.map((logo) => (
						<div className="project-logo" key={logo.alt}>
							<img src={logo.src} alt={logo.alt} title={logo.alt} width="30" height="30" />
						</div>
					))}
				</div>
				<div className="project-badges">
					{badges.map((badge) => (
						<span
							className={`project-badge project-badge-${toClassName(badge)}`}
							key={badge}
						>
							{badge}
						</span>
					))}
				</div>
			</div>
			<div className="project-date">
				{category && (
					<>
						<FontAwesomeIcon
							className="project-category-icon"
							icon={category === "hardware" ? faMicrochip : faCode}
						/>
						<span className="visually-hidden">
							{category === "hardware" ? "Hardware and robotics project, " : "Software project, "}
						</span>
					</>
				)}
				{date}
			</div>
			<h3 className="project-title">{title}</h3>

			<div className="project-description">{description}</div>
			{link && (
				<div className="project-link">
					<div className="project-link-icon">
						<FontAwesomeIcon icon={faLink} />
					</div>

					<div className="project-link-text">
						{linkText}
						<span className="visually-hidden"> (opens in a new tab)</span>
					</div>
				</div>
			)}
		</div>
	);

	return (
		<React.Fragment>
			<div className="project">
				{link ? (
					<a href={link} target="_blank" rel="noopener noreferrer">
						{content}
					</a>
				) : (
					content
				)}
			</div>
		</React.Fragment>
	);
};

export default Project;
