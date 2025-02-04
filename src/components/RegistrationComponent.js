import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import InputField from "./InputField";
import supabase from "../supabase/supabaseClient";
import { useNavigate } from "react-router";
import { PrivateRoutes } from "../routes/routes";

const RegistrationComponent = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSignup = async () => {
		const { data, error } = await supabase.auth.signUp(form);

		if (error?.code === "user_already_exists") {
			const { data, error } = supabase.auth.signInWithPassword(form);
			if (error) {
				setError(error);
			} else {
				navigate(PrivateRoutes.Dashboard);
			}
		} else if (error) {
			setError(error);
		} else if (data) {
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
