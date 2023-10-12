import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Notfound from "./pages/404";

import "./app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/portfolio/" element={<Homepage />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
