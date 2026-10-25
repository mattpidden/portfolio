import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Accessibility from "./pages/accessibility";
import Notfound from "./pages/404";

import "./app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/portfolio/" element={<Homepage />} />
				<Route path="/portfolio/privacy" element={<Privacy />} />
				<Route path="/portfolio/terms" element={<Terms />} />
				<Route path="/portfolio/accessibility" element={<Accessibility />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
