import { Icon, Stack, Text } from "@chakra-ui/react";
import { DollarSign, LogOutIcon } from "lucide-react";

const HeaderComponent = () => {
	return (
		<Stack
			h="76px"
			w="100%"
			boxShadow="0 0px 24px rgba(1,1,1, 0.2)"
			bgColor="white"
			justifyContent="center"
			alignItems="center"
		>
			<Stack flexDirection="row" alignItems="center" justifyContent="space-between" maxW="896px" w="100%">
				<Text color="black" fontSize="2xl" fontWeight="bold">
					My Expenses
				</Text>
				<Stack flexDir="row" gap={10}>
					<Stack
						flexDir="row"
						alignItems="center"
						_hover={{ cursor: "pointer", bgColor: "gray.50" }}
						py={2}
						px={4}
						borderRadius="lg"
					>
						<Icon color="black">
							<DollarSign size="18" />
						</Icon>
						<Text color="black">Set Income</Text>
					</Stack>
					<Stack
						flexDir="row"
						alignItems="center"
						_hover={{ cursor: "pointer", bgColor: "gray.50" }}
						py={2}
						px={4}
						borderRadius="lg"
					>
						<Icon color="black">
							<LogOutIcon size="18" />
						</Icon>
						<Text color="black">Set Income</Text>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};
export default HeaderComponent;
