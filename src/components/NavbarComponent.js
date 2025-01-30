import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";

const NavBarComponent = () => {
	const handleOnClick = () => {
		console.log("Sign In button clicked!");
	};

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" px={"24px"} py={"16px"} w="1280px">
			<Stack direction="row" spacing={4}>
				<Icon as={Sparkles} color="blue.500" size={"24px"} />
				<Text color="#111827" fontWeight="bold">
					ExpenseTracker
				</Text>
			</Stack>
			<Button px="16px" py="8px" borderRadius="full" bgColor="blue.500" color="white" onClick={handleOnClick}>
				Sign In
			</Button>
		</Stack>
	);
};
export default NavBarComponent;
