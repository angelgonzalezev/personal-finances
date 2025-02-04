import { Navigate, Outlet } from "react-router";
import { PublicRoutes } from "./routes";
import { useSelector } from "react-redux";

const AuthGuard = () => {
	const userState = useSelector((store) => store.user);

	return userState?.id?.length ? <Outlet /> : <Navigate replace to={PublicRoutes.Home} />;
};
export default AuthGuard;
