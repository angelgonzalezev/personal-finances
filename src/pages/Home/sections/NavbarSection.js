import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";
import DialogComponent from "../../../components/DialogComponent";
import RegistrationComponent from "../../../components/RegistrationComponent";

const NavBarComponent = () => {
	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" px={"24px"} py={"16px"} w="1280px">
			<Stack direction="row" spacing={4}>
				<Icon as={Sparkles} color="blue.500" size={"24px"} />
				<Text color="#111827" fontWeight="bold">
					ExpenseTracker
				</Text>
			</Stack>
			<DialogComponent
				title={"Create an account"}
				triggerElement={
					<Button px="16px" py="8px" borderRadius="full" bgColor="blue.500" color="white">
						Sign In
					</Button>
				}
				bodyElement={<RegistrationComponent />}
			/>
		</Stack>
	);
};
export default NavBarComponent;
