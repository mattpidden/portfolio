import React from "react";

import LegalPage from "../components/legal/legalPage";

import INFO from "../data/user";

const email = INFO.main.email;

const Privacy = () => (
	<LegalPage title="Privacy Notice" updated="25 October 2026">
		<p>
			This notice explains what personal data is processed when you visit
			this website or contact me, why, and the rights you have. I have
			kept this website deliberately simple so that as little data as
			possible is involved.
		</p>

		<h2>In short</h2>
		<ul>
			<li>This website does not use cookies, analytics or advertising trackers.</li>
			<li>It has no forms, accounts or sign-ups, and I do not sell or share your data.</li>
			<li>
				The site is hosted by GitHub, which processes basic technical
				data (such as your IP address) to deliver the pages to you.
			</li>
			<li>If you email me, I use your message only to reply to you.</li>
		</ul>

		<h2>Who is responsible for your data</h2>
		<p>
			This website is run by {INFO.main.name}, an individual, who is the
			data controller for the personal data described in this notice. You
			can contact me about anything in this notice at{" "}
			<a href={`mailto:${email}`}>{email}</a>.
		</p>

		<h2>What data is processed and why</h2>

		<h3>1. Visiting the website (hosting)</h3>
		<p>
			This website is hosted on GitHub Pages, a service provided by
			GitHub, Inc. When you visit, your browser connects to GitHub's
			servers, which necessarily receive technical information such as
			your IP address, browser type, the pages requested and the time of
			the request. GitHub uses this to serve the website and to keep its
			service secure, and may keep it in server logs.
		</p>
		<p>
			I do not have access to these logs and do not use them to identify
			or track visitors. The lawful basis for this processing is
			legitimate interests: delivering a working, secure website. GitHub's
			handling of this data is described in the{" "}
			<a
				href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub General Privacy Statement
				<span className="visually-hidden"> (opens in a new tab)</span>
			</a>
			.
		</p>

		<h3>2. My profile photo</h3>
		<p>
			The photo on the home page is loaded directly from my GitHub profile
			(avatars.githubusercontent.com) so that it stays up to date. Loading
			it means your browser makes a request to GitHub, which receives the
			same kind of technical information described above. No other
			third-party content, fonts, scripts or trackers are loaded: the
			fonts and technology logos are served from this website itself.
		</p>

		<h3>3. Contacting me by email</h3>
		<p>
			If you email me, I receive your email address, your name if you
			include it, and whatever you choose to write. I use this only to
			read and reply to your message and, if relevant, to continue a
			conversation about work or recruitment. The lawful basis is
			legitimate interests: responding to people who get in touch. Please
			do not send me sensitive personal information.
		</p>
		<p>
			I keep emails only for as long as needed for these purposes and
			delete them when they are no longer needed, or sooner if you ask me
			to. My email is provided by Yahoo, which processes messages on my
			behalf.
		</p>

		<h3>4. Downloading my CV and other documents</h3>
		<p>
			Downloading my CV or other documents from this site involves no
			extra data collection beyond the hosting described above.
		</p>

		<h3>5. Links to other websites</h3>
		<p>
			This website links to other sites, such as GitHub, LinkedIn and the
			App Store. Once you follow a link, the other site's own privacy
			policy applies, and I am not responsible for how those sites handle
			your data.
		</p>

		<h2>Cookies and similar technologies</h2>
		<p>
			This website does not set any cookies and does not use local
			storage, tracking pixels, fingerprinting or similar technologies.
			Because of this, there is no cookie banner. If that ever changes, I
			will update this notice and ask for your consent first where the law
			requires it.
		</p>

		<h2>International transfers</h2>
		<p>
			GitHub is based in the United States, so the hosting and photo data
			described above may be processed there. GitHub describes the
			safeguards it uses for international transfers, such as recognised
			data transfer frameworks and standard contractual clauses, in its
			privacy statement.
		</p>

		<h2>Your rights</h2>
		<p>
			Depending on where you live, including under the UK GDPR and EU
			GDPR, you may have the right to:
		</p>
		<ul>
			<li>ask for a copy of the personal data I hold about you;</li>
			<li>ask me to correct or delete it;</li>
			<li>ask me to restrict how I use it, or object to my using it;</li>
			<li>ask for your data in a portable format.</li>
		</ul>
		<p>
			In practice, the only personal data I hold is any emails you have
			sent me. To exercise these rights, email me at{" "}
			<a href={`mailto:${email}`}>{email}</a>. For data held by GitHub,
			please contact GitHub directly.
		</p>
		<p>
			If you are unhappy with how your data has been handled, please
			contact me first so I can try to put it right. You also have the
			right to complain to a data protection authority: in the UK this is
			the{" "}
			<a
				href="https://ico.org.uk/make-a-complaint/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Information Commissioner's Office (ICO)
				<span className="visually-hidden"> (opens in a new tab)</span>
			</a>
			, or you can contact the authority in the country where you live.
		</p>

		<h2>United States visitors</h2>
		<p>
			I do not sell or share personal information, and I do not use it for
			targeted advertising. This website does not knowingly collect
			information from children under 13.
		</p>

		<h2>Changes to this notice</h2>
		<p>
			If the way this website handles data changes, I will update this
			notice and the "last updated" date above.
		</p>
	</LegalPage>
);

export default Privacy;
