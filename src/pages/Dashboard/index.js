import { Box } from "@chakra-ui/react";
import HeaderComponent from "../../components/HeaderComponent";
import AddExpenseComponent from "../../components/AddExpenseComponent";

import StatsComponent from "../../components/StatsComponent";
import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";
import { useSelector } from "react-redux";
import ChartComponent from "../../components/ChartComponent";

const Dashboard = () => {
	const [error, setError] = useState(undefined);
	const userState = useSelector((store) => store.user);
	const [monthlyIncome, setMonthlyIncome] = useState("");
	const [lastMontExpenses, setLastMontExpenses] = useState([]);

	useEffect(() => {
		const getLastIncome = async () => {
			const { data, error } = await supabase
				.from("incomes")
				.select("amount")
				.order("created_at", { ascending: false }) // Fallback to created_at if dates are the same
				.limit(1);
			if (error) {
				setError(error.message);
			} else if (data.length > 0) {
				setMonthlyIncome(data[0].amount);
			}
		};
		getLastIncome();
	}, [userState]);

	useEffect(() => {
		const getTotalExpenses = async () => {
			const { data } = await supabase
				.from("expenses")
				.select("amount, tag, created_at")
				.gte("created_at", new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString())
				.order("created_at", { ascending: false }); // Fallback to created_at if dates are the same

			if (data.length > 0) {
				setLastMontExpenses(data);
			}
		};
		getTotalExpenses();
	}, [userState]);

	return (
		<Box w={"100%"} bgColor="pink.50" minH="100vh">
			<HeaderComponent currentMonthlyIncome={monthlyIncome} currentError={error} />
			{/* <ChartComponent /> */}
			<StatsComponent currentMonthlyIncome={monthlyIncome} lastMontExpenses={lastMontExpenses} />
			<AddExpenseComponent />
		</Box>
	);
};
export default Dashboard;
