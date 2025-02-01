import { Input, Stack, Text } from "@chakra-ui/react";

const InputField = ({ label, placeholder, name, handleOnChange, type = "text" }) => {
	return (
		<Stack flexDir="column">
			<Text color="black">{label}</Text>
			<Input
				placeholder={placeholder}
				onChange={handleOnChange}
				name={name}
				type={type}
				color="black"
				borderColor="gray.200"
				borderWidth="1px"
				borderRadius="lg"
			/>
		</Stack>
	);
};
export default InputField;
