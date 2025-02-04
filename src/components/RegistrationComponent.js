import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import InputField from "./InputField";
import supabase from "../supabase/supabaseClient";
import { useNavigate } from "react-router";
import { PrivateRoutes } from "../routes/routes";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/states/user";

const RegistrationComponent = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSignup = async () => {
		const { data, error } = await supabase.auth.signUp(form);

		if (error?.code === "user_already_exists") {
			const { data, error } = await supabase.auth.signInWithPassword(form);
			if (error) {
				setError(error);
			} else if (data.user && data.session) {
				const { id } = data.user;
				dispatch(createUser({ id }));

				navigate(PrivateRoutes.Dashboard);
			}
		} else if (error) {
			console.log("Entra en error");
			setError(error);
		} else if (data.session) {
			console.log("Entra e session");
			navigate("/dashboard");
		}
	};

	return (
		<Stack direction="column">
			<InputField label="Email" placeholder="Email" handleOnChange={handleOnChange} name="email" />
			<InputField
				label="Password"
				placeholder="Password"
				handleOnChange={handleOnChange}
				name="password"
				type="password"
			/>
			<Button px="16px" py="8px" borderRadius="full" bgColor="blue.500" color="white" onClick={handleSignup}>
				Sign up
			</Button>
			{error && <Text color="red">{error.message}</Text>}
		</Stack>
	);
};
export default RegistrationComponent;
