import { Box } from "@chakra-ui/react";
import HeaderComponent from "../../components/HeaderComponent";
import AddExpenseComponent from "../../components/AddExpenseComponent";

const Dashboard = () => {
	return (
		<Box minW="100vw" minH="100vh" bgColor="white">
			<HeaderComponent />
			<AddExpenseComponent />
		</Box>
	);
};
export default Dashboard;
