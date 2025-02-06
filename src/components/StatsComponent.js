import { Stack } from "@chakra-ui/react";
import MonthlyOverviewComponent from "./MonthlyOverviewComponent";
import RecentExpenses from "./RecentExpenses";

const StatsComponent = ({ currentMonthlyIncome, lastMontExpenses }) => {
	const totalExpenses = lastMontExpenses.reduce((sum, expense) => sum + expense.amount, 0);
	return (
		<Stack w="100%" minH="100vh" alignItems="center">
			<Stack w="100%" maxW="896px">
				<MonthlyOverviewComponent currentMonthlyIncome={currentMonthlyIncome} totalExpenses={totalExpenses} />
				<RecentExpenses lastMontExpenses={lastMontExpenses} />
			</Stack>
		</Stack>
	);
};
export default StatsComponent;
