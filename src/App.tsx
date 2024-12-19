import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import Shopping from "./components/Shopping";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<p>NavBar</p>
			<Outlet />
			<p>Footer</p>
		</>
	);
}

export default App;
