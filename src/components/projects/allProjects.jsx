import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			<div className="title project-title">
				<span>Take A Look At My </span>
				<span className="project-title-keyword">Projects</span>
			</div>

			<div className="project-list-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						date={project.date}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
			</div>
		</div>
	);
};

export default AllProjects;
