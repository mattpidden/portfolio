// Technology logos from Devicon v2.16.0 (MIT), self-hosted in public/logos
const LOGO_DIR = `${process.env.PUBLIC_URL}/logos`;
const icon = (name, label, variant = "original") => ({
	src: `${LOGO_DIR}/${name}-${variant}.svg`,
	alt: label,
});

const LOGOS = {
	cpp: icon("cplusplus", "C++"),
	python: icon("python", "Python"),
	ros: icon("ros", "ROS 2"),
	raspberrypi: icon("raspberrypi", "Raspberry Pi"),
	pytorch: icon("pytorch", "PyTorch"),
	opencv: icon("opencv", "OpenCV"),
	flutter: icon("flutter", "Flutter"),
	firebase: icon("firebase", "Firebase"),
	react: icon("react", "React"),
	javascript: icon("javascript", "JavaScript"),
	django: icon("django", "Django", "plain"),
	swift: icon("swift", "Swift"),
	go: icon("go", "Go"),
	unity: icon("unity", "Unity"),
	csharp: icon("csharp", "C#"),
};

const INFO = {
	main: {
		title: "Matthew Pidden | Robotics Engineer",
		name: "Matthew Pidden",
		email: "mdpidden@yahoo.co.uk",
	},

	socials: {
		github: "https://github.com/mattpidden",
		linkedin: "https://www.linkedin.com/in/mattpidden/",
		instagram: "https://instagram.com/mattpidden",
	},

	homepage: {
		titlepart1: "Greetings, I'm ",
		// rotating headlines shown with a typing effect after the name
		headlines: [
			"A robotics engineer with a passion for the ocean.",
			"A recent Imperial College London MSc Robotics graduate.",
			"The builder of a world record rubiks cube solving robot.",
			"A Yachtmaster Offshore sailor and seasoned yacht racer.",
			"Available to work in Miami FL from November 2026.",
		],
		description: "I'm a robotics engineer and software developer with an MSc in Visual Computing and Robotics from Imperial College London, and a first-class BSc in Computer Science from the University of Bristol, where I graduated in the top 10 of my year. I'm keen to work in marine robotics, where I can combine autonomy, computer vision and embedded systems with my background in yacht racing and my Yachtmaster Offshore qualification. I'm currently building a 3D-printed autonomous sailing vessel for marine data collection. Other highlights include The Revenger, a robot that broke the world record for solving a 4x4 Rubik’s Cube (45.305 seconds), and Santa Tracker, a Flutter app that reached #8 on the UK App Store with over 100,000 downloads. I'm available to work in Miami, FL from November 2026."
	},

	// category: "hardware" (robotics, microcontrollers, devices) or "software" (apps, websites, research code)
	// badges: first is the project type (Personal / University / Commissioned / Hackathon),
	// second is the status (In Progress / Archived)
	projects: [{
		title: "Autonomous Surface Vessel",
		date: "October 2026 - Present",
		category: "hardware",
		badges: ["Personal", "In Progress"],
		description:
			"A 3D-printed autonomous sailing vessel for marine data collection. A Raspberry Pi 4 runs a ROS 2 (Python) stack for GPS/IMU navigation, wind-aware route planning and camera obstacle detection, while a MicroPython Pico drives the sail and rudder, with LTE telemetry.",
		logos: [LOGOS.python, LOGOS.ros, LOGOS.raspberrypi],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/autonomous-surface-vessel",
	},
	{
		title: "Foil Run iOS Game",
		date: "July 2026 - Present",
		category: "software",
		badges: ["Personal", "In Progress"],
		description:
			"A physics-driven endless runner for iOS, built in Unity with C#. Players ride a hydrofoil, balancing lift and speed to stay on the water, in the spirit of Flappy Bird and Jetpack Joyride, with a strong focus on game feel and visual effects. Not yet on the App Store.",
		logos: [LOGOS.unity, LOGOS.csharp],
		linkText: "",
		link: "",
	},
	{
		title: "VLA-0 End-Effector Trace Conditioning",
		date: "April 2026 - September 2026",
		category: "hardware",
		badges: ["University"],
		description:
			"MSc thesis at Imperial College London. Extends NVIDIA's VLA-0 (Qwen2.5-VL) so a robot policy is conditioned on one image tracing the end-effector's path through a human demo, improving task generalisation with no architectural changes or new data. Python, PyTorch, MediaPipe and SLURM HPC training.",
		logos: [LOGOS.python, LOGOS.pytorch],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/vla0-eetc",
	},
	{
		title: "Made Recipe App",
		date: "February 2026",
		category: "software",
		badges: ["Hackathon"],
		description:
			"A recipe and meal-planning app built for RevenueCat's Shipyard Hackathon. Flutter (iOS and Android) with Firebase Auth, Firestore, Storage and Cloud Functions for recipe-from-URL parsing, Google ML Kit OCR for scanning cookbooks, and RevenueCat-powered subscriptions.",
		logos: [LOGOS.flutter, LOGOS.firebase],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/made-recipe-app",
	},
	{
		title: "Bike Navigation Display",
		date: "October 2025 - August 2026",
		category: "hardware",
		badges: ["Personal"],
		description:
			"A DIY bike computer: a 3D-printed, handlebar-mounted ESP32-S3 round display that renders an offline OpenStreetMap vector map in C++. A Flutter companion app streams GPS position and Google Directions routes over Bluetooth LE, and a Python pipeline compiles the map data.",
		logos: [LOGOS.cpp, LOGOS.flutter, LOGOS.python],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/bike-navigation",
	},
	{
		title: "Rally Radio Proximity Sensors",
		date: "October 2025 - November 2025",
		category: "hardware",
		badges: ["Personal"],
		description:
			"A pair of long-range LoRa radios that alert a rally service crew as their car approaches, with no phone signal needed. RP2040 + SX1262 boards programmed in C++ (Arduino) broadcast the car's status, and the receiver maps signal strength (RSSI) to beep rate as a rough distance indicator.",
		logos: [LOGOS.cpp],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/radio-proximity-sensors",
	},
	{
		title: "Bus Stop Display",
		date: "September 2025 - January 2026",
		category: "hardware",
		badges: ["Personal"],
		description:
			"A 3D-printed desktop replica of a London bus stop countdown sign. An ESP32 programmed in C++ polls the TfL live arrivals API over Wi-Fi and drives a 20×4 I²C character LCD, with a single button cycling between all routes, per-route views and a daily bus counter.",
		logos: [LOGOS.cpp],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/bus-stop-display",
	},
	{
		title: "The Revenger",
		date: "January 2025 - April 2025",
		category: "hardware",
		badges: ["University"],
		description:
			"The world's fastest 4x4 Rubik's Cube solving robot, setting a record time of 45.305 seconds as my Bristol dissertation. Custom-built hardware, Python and OpenCV vision, and an original 8-phase C++ solver based on Tsai's method averaging 67.8 moves. Featured on BBC and ITV News.",
		logos: [LOGOS.cpp, LOGOS.python, LOGOS.opencv],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/the-revenger",
	},
	{
		title: "Firethorn Partners Website",
		date: "December 2024",
		category: "software",
		badges: ["Commissioned"],
		description:
			"A commissioned website for Firethorn Partners, an investment management firm. Designed together with the client and built as a responsive React single-page app, then deployed to their hosting. I continue to support the client with hosting, maintenance and content updates.",
		logos: [LOGOS.react],
		linkText: "View Website",
		link: "https://www.firethornpartners.com/",
	},
	{
		title: "The Picks App",
		date: "March 2024 - Present",
		category: "software",
		badges: ["Personal", "In Progress"],
		description:
			"A fully automated Premier League prediction game with 100+ weekly users. A Flutter iOS app on a Firebase backend (Auth and Firestore), with JavaScript Cloud Functions running the game logic so every round runs without manual input. Updated each season since launch.",
		logos: [LOGOS.flutter, LOGOS.firebase, LOGOS.javascript],
		linkText: "View on App Store",
		link: "https://apps.apple.com/gb/app/the-picks-prem-league-26-27/id1605389650",
	},
	{
		title: "Santa Tracker App",
		date: "December 2023 - Present",
		category: "software",
		badges: ["Personal", "In Progress"],
		description:
			"A seasonal Santa-tracking app that reached #8 on the UK App Store, with 100k+ downloads and $10k+ in revenue. Built in Flutter with a Firebase backend, it is updated every December based on user feedback to keep growing its audience.",
		logos: [LOGOS.flutter, LOGOS.firebase],
		linkText: "View on App Store",
		link: "https://apps.apple.com/gb/app/live-santa-tracker/id6473787738",
	},
	{
		title: "Parallel & Distributed Game of Life",
		date: "November 2023 - December 2023",
		category: "software",
		badges: ["University"],
		description:
			"Serial, parallel and distributed implementations of Conway's Game of Life in Go, splitting the grid across worker threads that coordinate over channels and across networked worker nodes, then benchmarking speed and scalability. Graded 81%, and I went on to TA the unit the following year.",
		logos: [LOGOS.go],
		linkText: "",
		link: "",
	},
	{
		title: "Bloginator Cross-Platform App",
		date: "October 2023 - August 2024",
		category: "software",
		badges: ["Commissioned"],
		description:
			"An internal tool built for Global Expeditions Group during my internship, letting staff and participants create, edit and publish blog posts to the company's ActionQuest, Seamester and GoBeyond sites. Built in Flutter, it works offline and syncs through a REST API.",
		logos: [LOGOS.flutter],
		linkText: "View on App Store (Unlisted)",
		link: "https://www.globalexpeditionsgroup.com/bloginator",
	},
	{
		title: "Marine Conservation App & Website",
		date: "September 2023 - June 2024",
		category: "software",
		badges: ["University", "Archived"],
		description:
			"A year-long second-year group project built for the university scuba club, which won the prize for best group project. The platform paired a Flutter mobile app and a React website with a shared Python Django backend. It has since been decommissioned.",
		logos: [LOGOS.flutter, LOGOS.react, LOGOS.django],
		linkText: "",
		link: "",
	},
	{
		title: "MasterWordle App",
		date: "May 2023",
		category: "software",
		badges: ["Personal", "Archived"],
		description:
			"A short fun project combining Wordle and Mastermind: guess the hidden word using Mastermind-style feedback. First built as a React web app in JavaScript, then rebuilt as a cross-platform Flutter app. It has since been decommissioned, but the source is still available.",
		logos: [LOGOS.flutter, LOGOS.react],
		linkText: "View GitHub",
		link: "https://github.com/mattpidden/masterwordle",
	},
	{
		title: "Vague Weather iOS App",
		date: "September 2022 - March 2023",
		category: "software",
		badges: ["Personal"],
		description:
			"A tongue-in-cheek weather app that gives deliberately vague, practical forecasts such as \"Do I need an umbrella?\". A native iOS app written in Swift in Xcode, with home and lock screen widgets, built to showcase my frontend and UI/UX design skills.",
		logos: [LOGOS.swift],
		linkText: "View on App Store",
		link: "https://apps.apple.com/gb/app/vague/id6443783608",
	},
	{
		title: "HK Dragon iOS App",
		date: "July 2021 - September 2021",
		category: "software",
		badges: ["Commissioned", "Archived"],
		description:
			"An iOS app commissioned by the Royal Hong Kong Yacht Club and delivered over a single summer. Built as a native Swift app with a Cloud Firestore backend, it was designed, developed and shipped to the client's requirements. It has since been decommissioned.",
		logos: [LOGOS.swift, LOGOS.firebase],
		linkText: "",
		link: "",
	},
	{
		title: "Potion Brewer Image Recognition Game",
		date: "March 2021",
		category: "software",
		badges: ["Hackathon"],
		description:
			"A magic-themed webcam game where players have two minutes to show real-world objects as potion ingredients, detected in real time with YOLOv3 and OpenCV, with a Pygame UI. Built in Python in my final year of high school, it won 1st place in the FOBISIA 2021 Coding Challenge.",
		logos: [LOGOS.python, LOGOS.opencv],
		linkText: "View Documentation",
		link: "https://github.com/mattpidden/potionbrewer/blob/main/_PLEASE%20READ_%20Potion%20Brewer%20Documentation.pdf",
	},
	],
};

export default INFO;
