import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shopping from "./components/Shopping";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
