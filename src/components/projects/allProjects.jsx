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
		<section className="all-projects-container" aria-labelledby="projects-heading">
			<h2 className="title all-projects-title" id="projects-heading">
				<span>Take A Look At My </span>
				<span className="project-title-keyword">Projects</span>
			</h2>

			<div className="project-filters" role="group" aria-label="Filter projects">
				{FILTERS.map(({ key, label }) => (
					<button
						type="button"
						key={key}
						className={`project-filter${filter === key ? " active" : ""}`}
						onClick={() => setFilter(key)}
						aria-pressed={filter === key}
					>
						{label}
					</button>
				))}
			</div>

			<p className="visually-hidden" aria-live="polite">
				Showing {projects.length} projects
			</p>

			<ul className="project-list-container">
			{projects.map((project) => (
				<li className="all-projects-project" key={project.title}>
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
				</li>
			))}
			</ul>
		</section>
	);
};

export default AllProjects;
