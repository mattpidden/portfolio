import React from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#homepage-logo-container">Home</a>
							</li>
							
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
							  <a href="#homepage-projects">Projects</a>
							</li>
							
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href="#homepage-contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
