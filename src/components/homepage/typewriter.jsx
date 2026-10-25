import React, { useEffect, useState } from "react";

import "./styles/typewriter.css";

const TYPE_DELAY = 55;
const DELETE_DELAY = 30;
const HOLD_DELAY = 2000;
const NEXT_DELAY = 400;

const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Typewriter = ({ phrases }) => {
	const [index, setIndex] = useState(0);
	const [length, setLength] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const [reducedMotion] = useState(prefersReducedMotion);

	const phrase = phrases[index];

	const still = reducedMotion;

	useEffect(() => {
		// The visitor prefers reduced motion: hold the first phrase
		if (still) return;

		let timer;
		if (!deleting && length < phrase.length) {
			timer = setTimeout(() => setLength(length + 1), TYPE_DELAY);
		} else if (!deleting) {
			timer = setTimeout(() => setDeleting(true), HOLD_DELAY);
		} else if (length > 0) {
			timer = setTimeout(() => setLength(length - 1), DELETE_DELAY);
		} else {
			timer = setTimeout(() => {
				setDeleting(false);
				setIndex((i) => (i + 1) % phrases.length);
			}, NEXT_DELAY);
		}
		return () => clearTimeout(timer);
	}, [length, deleting, phrase, phrases.length, still]);

	const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), "");
	const visible = still ? phrase : phrase.slice(0, length);

	return (
		<span className="typewriter">
			{/* Screen readers get the first phrase once instead of every keystroke */}
			<span className="typewriter-sr-only">{phrases[0]}</span>
			<span className="typewriter-stack" aria-hidden="true">
				{/* Invisible longest phrase reserves space so the page doesn't jump */}
				<span className="typewriter-placeholder">{longest}</span>
				<span className="typewriter-text">
					{visible}
					{!still && <span className="typewriter-cursor" />}
				</span>
			</span>
		</span>
	);
};

export default Typewriter;
