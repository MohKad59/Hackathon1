import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Contact from "./components/Contact.tsx";
import Accueil from "./components/Accueil.tsx";
import Shopping from "./components/Shopping.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Accueil />,
			},
			{
				path: "/Shopping",
				element: <Shopping />,
			},
			{
				path: "/Contact",
				element: <Contact />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
