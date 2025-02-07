import { Box, Stack, Text } from "@chakra-ui/react";
import { Categories } from "../constants/categories";
import { capitalizeFirstLetter } from "../utilities/utils";

const RecentExpenses = ({ lastMontExpenses }) => {
	const lastExpenses = lastMontExpenses.slice(0, 3);

	const lastExpensesList = lastExpenses.map((expense) => {
		const amount = expense.amount;
		const category = Categories.filter((_category) => {
			return _category.categoryTag === expense.tag;
		});
		return {
			amount,
			date: new Date(expense.created_at).toLocaleDateString(),
			...category[0],
		};
	});

	return (
		<Stack p={4} maxW="896px" flexDir="column" gap={1}>
			<Text fontSize="md" color="black" fontWeight="semibold">
				Recent Expenses
			</Text>
			{lastExpensesList.map((expense, idx) => (
				<Stack
					key={idx}
					p={3}
					borderRadius="lg"
					bgColor="white"
					borderWidth="1px"
					borderColor="gray.100"
					flexDir="row"
					alignItems="center"
					justifyContent="space-between"
					gap={4}
				>
					<Stack flexDir="row" alignItems="center">
						<Text fontSize="2xl">{expense.icon}</Text>
						<Stack flexDir="column" gap={0}>
							<Text fontSize="lg" color="black" fontWeight="semibold">
								{capitalizeFirstLetter(expense.categoryTag)}
							</Text>
							<Text fontSize="md" color="gray.500" fontWeight="semibold">
								{expense.date}
							</Text>
						</Stack>
					</Stack>
					<Text fontSize="lg" color="black" fontWeight="semibold">
						€ {Number(expense.amount).toFixed(2)}
					</Text>
				</Stack>
			))}
		</Stack>
	);
};
export default RecentExpenses;
