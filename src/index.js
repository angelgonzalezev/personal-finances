import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as ComponentsProvider } from "./components/ui/provider";
import { Provider } from "react-redux";
import { store } from "./redux/stores/stores";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ComponentsProvider>
				<App />
			</ComponentsProvider>
		</Provider>
	</React.StrictMode>
);
