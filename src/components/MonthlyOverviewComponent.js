import { Box, Text } from "@chakra-ui/react";
import StatComponent from "./StatComponent";

const MonthlyOverviewComponent = ({ currentMonthlyIncome, totalExpenses }) => {
	return (
		<Box p={4} m={4} borderRadius="lg" maxW="896px" bgColor="white">
			<Text fontSize="md" color="gray.700" fontWeight="medium">
				Monthly Overview
			</Text>
			<StatComponent title="Monthly Income" amount={currentMonthlyIncome} color="green" />
			<StatComponent title="Total Expenses" amount={totalExpenses} color="red" />
		</Box>
	);
};
export default MonthlyOverviewComponent;
