import React from "react";
import { Link } from "react-router-dom";

import LegalPage from "../components/legal/legalPage";

import INFO from "../data/user";

const email = INFO.main.email;

const Terms = () => (
	<LegalPage title="Terms of Use" updated="25 October 2026">
		<p>
			These terms apply to your use of this website, which is the personal
			portfolio of {INFO.main.name}. By using the website you agree to
			these terms. If you do not agree, please do not use the website.
		</p>

		<h2>About this website</h2>
		<p>
			This website is a personal portfolio showing my education, projects
			and experience. It is provided for general information only. It is
			not an offer of goods or services, and nothing on it is professional,
			technical or legal advice.
		</p>

		<h2>Accuracy of information</h2>
		<p>
			I try to keep the information on this website accurate and up to
			date, but I do not guarantee that it is complete, current or free of
			errors. Project descriptions, figures and dates are summaries and may
			change over time. If you plan to rely on something, such as for a
			hiring decision, please confirm it with me directly.
		</p>

		<h2>Intellectual property</h2>
		<p>
			Unless stated otherwise, the content of this website, including its
			text, design, photographs, diagrams and my CV, is © {INFO.main.name}.
			You may view it, link to it and share links to it. You may not
			copy, republish or use substantial parts of it, or my photographs or
			personal details, for any other purpose without my written
			permission.
		</p>
		<p>
			Source code for individual projects is governed by the licence in
			each project's own repository, where one is provided. Where no
			licence is provided, no licence is granted.
		</p>

		<h2>Third-party names, logos and trademarks</h2>
		<p>
			Technology logos (such as Python, C++, Flutter, React, Swift, Go,
			Unity, ROS, Firebase and Raspberry Pi) and the names of
			organisations, companies, universities, clients, products and app
			stores mentioned on this website are the property of their
			respective owners. They are used only to describe the tools I have
			used, places I have studied, or work I have done. Their use does not
			mean that any of these owners endorse, sponsor or are affiliated with
			me or this website.
		</p>
		<p>
			Technology logos are from the{" "}
			<a
				href="https://devicon.dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Devicon
				<span className="visually-hidden"> (opens in a new tab)</span>
			</a>{" "}
			project, used under the MIT licence.
		</p>

		<h2>Links to other websites</h2>
		<p>
			This website links to other websites, including GitHub, LinkedIn,
			app stores and client websites. I do not control those websites and
			am not responsible for their content, availability, terms or privacy
			practices. A link does not mean that I endorse that website.
		</p>

		<h2>Acceptable use</h2>
		<p>
			Please do not use this website in a way that is unlawful, that
			interferes with its operation, or that attempts to gain unauthorised
			access to it or to the systems that host it. Please do not use the
			contact details on this website to send unsolicited marketing.
		</p>

		<h2>Availability</h2>
		<p>
			This website is provided free of charge on an "as is" and "as
			available" basis. I may change, suspend or remove it, or any part of
			it, at any time without notice.
		</p>

		<h2>Limitation of liability</h2>
		<p>
			To the fullest extent permitted by law, I exclude all warranties and
			conditions relating to this website and its content, and I am not
			liable for any loss or damage arising from your use of, or inability
			to use, this website, or from your reliance on any of its content.
			This includes indirect or consequential loss, and loss of data,
			profits or opportunity.
		</p>
		<p>
			Nothing in these terms limits or excludes any liability that cannot
			be limited or excluded by law, including liability for death or
			personal injury caused by negligence, or for fraud or fraudulent
			misrepresentation.
		</p>

		<h2>Privacy</h2>
		<p>
			How personal data is handled is explained in the{" "}
			<Link to="/portfolio/privacy">Privacy Notice</Link>.
		</p>

		<h2>Governing law</h2>
		<p>
			These terms are governed by the law of England and Wales. Any dispute
			will be subject to the non-exclusive jurisdiction of the courts of
			England and Wales. If you live elsewhere, you may also have rights
			under the laws of your own country that these terms do not override.
		</p>

		<h2>Changes and contact</h2>
		<p>
			I may update these terms from time to time; the "last updated" date
			above shows when they last changed. If you have any questions,
			contact me at <a href={`mailto:${email}`}>{email}</a>.
		</p>
	</LegalPage>
);

export default Terms;
