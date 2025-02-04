import { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import { Navigate, Outlet } from "react-router";
import { Text } from "@chakra-ui/react";
import { PublicRoutes } from "./routes";

const AuthGuard = () => {
	const [loading, setLoading] = useState(true);
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const getSession = async () => {
			const { data, error } = await supabase.auth.getSession();
			const { session } = data;
			setAuthenticated(!!session);
			setLoading(false);
		};
		getSession();
	}, []);

	return <>{loading ? <Text>Loading...</Text> : authenticated ? <Outlet /> : <Navigate to={PublicRoutes.Home} />}</>;
};
export default AuthGuard;
