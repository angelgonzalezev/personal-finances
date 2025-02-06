import { Stack, Text } from "@chakra-ui/react";

const StatComponent = ({ title, amount, color }) => {
	return (
		<Stack flexDirection="column">
			<Text color={color} fontWeight="bold" fontSize="2xl">
				€ {Number(amount).toFixed(2)}
			</Text>
			<Text color="gray.600" fontSize="sm" fontWeight="medium">
				{title}
			</Text>
		</Stack>
	);
};

export default StatComponent;
