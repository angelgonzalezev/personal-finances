import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import InputField from "./InputField";
import supabase from "../supabase/supabaseClient";

const LoginComponent = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSignIn = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: form.email,
			password: form.password,
		});
		if (error) {
			setError(error);
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
			<Button px="16px" py="8px" borderRadius="full" bgColor="blue.500" color="white" onClick={handleSignIn}>
				Log in
			</Button>
		</Stack>
	);
};
export default LoginComponent;
