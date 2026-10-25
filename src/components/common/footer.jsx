import React from "react";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
			

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {new Date().getFullYear()} Matthew Pidden
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
