import React from "react";

import LegalPage from "../components/legal/legalPage";

import INFO from "../data/user";

const email = INFO.main.email;

const Accessibility = () => (
	<LegalPage title="Accessibility Statement" updated="25 October 2026">
		<p>
			I want everyone to be able to use this website, whatever device,
			browser or assistive technology they use. This statement explains how
			accessible the website is and how to tell me about any problems.
		</p>

		<h2>Standard</h2>
		<p>
			This website aims to meet the{" "}
			<a
				href="https://www.w3.org/TR/WCAG22/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Web Content Accessibility Guidelines (WCAG) 2.2
				<span className="visually-hidden"> (opens in a new tab)</span>
			</a>{" "}
			at level AA.
		</p>

		<h2>What I have done</h2>
		<ul>
			<li>
				Pages use proper headings and landmarks, and include a "skip to
				main content" link so keyboard and screen reader users can move
				around easily.
			</li>
			<li>
				Everything can be used with a keyboard alone, and the item that
				has keyboard focus is always clearly outlined.
			</li>
			<li>
				Text and important icons meet WCAG AA colour contrast
				requirements, and colour is never the only way information is
				shown.
			</li>
			<li>
				Images have text alternatives, icon-only links have accessible
				names, and links that open in a new tab say so to screen
				readers.
			</li>
			<li>
				The animated headline on the home page is read out only once by
				screen readers, and stays still if your device is set to reduce
				motion. Smooth scrolling is also switched off in that case.
			</li>
			<li>
				The layout adapts to small screens and to zooming up to 400%
				without content being lost or needing to scroll sideways.
			</li>
		</ul>

		<h2>Known limitations</h2>
		<ul>
			<li>
				The animated headline on the home page cannot be paused with an
				on-page control (WCAG 2.2.2). If the movement is distracting,
				turning on your device's "reduce motion" setting stops it
				completely.
			</li>
			<li>
				My CV is a PDF and may not be fully accessible to screen readers.
				If you need it in another format, email me and I will send you
				one.
			</li>
			<li>
				Links to other websites, such as GitHub, LinkedIn, app stores and
				client websites, go to content I do not control, which may not
				meet the same standard.
			</li>
		</ul>

		<h2>Feedback and contact</h2>
		<p>
			If you find a problem with the accessibility of this website, or
			need information in a different format, please email me at{" "}
			<a href={`mailto:${email}`}>{email}</a>. I aim to reply within 5
			working days.
		</p>

		<h2>How this website was tested</h2>
		<p>
			This website was last checked on 25 October 2026 using automated
			accessibility testing (axe-core), keyboard-only navigation, and
			manual checks of colour contrast, headings, zoom and reduced-motion
			behaviour on desktop and mobile screen sizes.
		</p>
	</LegalPage>
);

export default Accessibility;
