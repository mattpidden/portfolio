import React from "react"

import Socials from "../about/socials";

import "./styles/contact.css";

const Contact = () => {

	return (
					<div className="contact-container">
						<div className="title contact-title">
							<span>Get In </span>
							<span className="contact-title-keyword">Contact </span>
							<span>With Me</span>
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. Please feel free to email me directly.
							Alternatively, you may wish to take a look at my GitHub or LinkedIn profiles.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>

						<div className="socials-container">
							<div className="contact-socials">
								<Socials />
							</div>
						</div>
					</div>
					
	);
};

export default Contact;
