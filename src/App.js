import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./routes/AuthGuard";
import { PrivateRoutes, PublicRoutes } from "./routes/routes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PublicRoutes.Home} element={<Home />} />
				<Route element={<AuthGuard />}>
					<Route path={PrivateRoutes.Dashboard} element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
