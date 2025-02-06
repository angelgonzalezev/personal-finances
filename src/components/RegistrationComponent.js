import { Stack, Text } from "@chakra-ui/react";
import InputField from "./InputField";

const RegistrationComponent = ({ error, form, setForm }) => {
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
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

			{error && <Text color="red">{error.message}</Text>}
		</Stack>
	);
};
export default RegistrationComponent;
