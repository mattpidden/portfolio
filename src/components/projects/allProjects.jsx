import React, { useState } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const FILTERS = [
	{ key: "all", label: "All" },
	{ key: "hardware", label: "Hardware & Robotics" },
	{ key: "software", label: "Software" },
];

const AllProjects = () => {
	const [filter, setFilter] = useState("all");

	const projects = INFO.projects.filter(
		(project) => filter === "all" || project.category === filter
	);

	return (
		<div className="all-projects-container">
			<div className="title all-projects-title">
				<span>Take A Look At My </span>
				<span className="project-title-keyword">Projects</span>
			</div>

			<div className="project-filters">
				{FILTERS.map(({ key, label }) => (
					<button
						type="button"
						key={key}
						className={`project-filter${filter === key ? " active" : ""}`}
						onClick={() => setFilter(key)}
					>
						{label}
					</button>
				))}
			</div>

			<div className="project-list-container">
			{projects.map((project) => (
				<div className="all-projects-project" key={project.title}>
					<Project
						logos={project.logos}
						badges={project.badges}
						category={project.category}
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
