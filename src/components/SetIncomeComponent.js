import { Input, Stack, Text } from "@chakra-ui/react";
import { InputGroup } from "./ui/InputGroup";
import { DollarSign } from "lucide-react";

const SetIncomeComponent = ({ handleOnChange, monthlyIncome, error, success }) => {
	return (
		<Stack flexDir="column" w="100%" alignItems="start">
			<Stack flexDir="column" gap={2} w="100%">
				<Text color="gray.800" fontSize="sm" fontWeight="semibold">
					Average Monthly Income
				</Text>
				<InputGroup flex="1" startElement={<DollarSign color="rgba(1,1,1,0.4)" />}>
					<Input
						placeholder="Type your monthly income"
						name="monthlyIncome"
						onChange={handleOnChange}
						type="number"
						color="black"
						fontSize="md"
						value={monthlyIncome}
					/>
				</InputGroup>
			</Stack>
			{error && <Text color="red">{error}</Text>}
		</Stack>
	);
};
export default SetIncomeComponent;
