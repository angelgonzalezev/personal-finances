import { Navigate, Outlet } from "react-router";
import { PublicRoutes } from "./routes";
import { useEffect, useState } from "react";
import Loading from "../pages/Loading";
import supabase from "../supabase/supabaseClient";

const AuthGuard = () => {
	const [session, setSession] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession();
			setSession(session);
			setLoading(false);
		};
		getSession();
	}, []);

	if (loading) {
		return <Loading />;
	}
	if (!session) {
		return <Navigate replace to={PublicRoutes.Home} />;
	} else {
		return <Outlet />;
	}
};
export default AuthGuard;
