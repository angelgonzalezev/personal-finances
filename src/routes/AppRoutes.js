import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AuthGuard from "./AuthGuard";
import RedirectGuard from "./RedirectGuard";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<RedirectGuard />}>
				<Route path={PublicRoutes.Home} element={<Home />} />
			</Route>
			<Route element={<AuthGuard />}>
				<Route path={PrivateRoutes.Dashboard} element={<Dashboard />} />
			</Route>
		</Routes>
	);
};
export default AppRoutes;
