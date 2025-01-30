import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "../components/ui/Avatar";
import { ArrowRight, Zap } from "lucide-react";
import { Rating } from "./ui/Rating";

const HeroComponent = () => {
	return (
		<Stack direction="column" py="80px" px="16px" w="1280px">
			<Stack
				direction="row"
				alignItems="center"
				borderRadius="full"
				borderWidth="1px"
				borderColor="#bfdbfe"
				py="8px"
				px="16px"
				bgGradient="to-r"
				gradientFrom="blue.50"
				gradientTo="blue.100"
				w="fit-content"
			>
				<Icon color="blue.500">
					<Zap size="16px" />
				</Icon>
				<Text color="blue.500" fontWeight="bold">
					Track expenses like a pro
				</Text>
			</Stack>
			<Stack flexDir="column" gap="32px">
				<Text color="black" fontSize="7xl" fontWeight="bold" maxW="896px" lineHeight="0.8">
					The fastest way to track your expenses
				</Text>
				<Text color="black" fontSize="xl" maxW="672px">
					Stop using spreadsheets. Start using a modern expense tracker that helps you understand where your money goes.
					Built for individuals and teams.
				</Text>
				<Stack flexDir="row" gap="1" alignItems="center">
					<Button bgColor="blue.500" py="16px" px="32px" h="fit-content" rounded="full">
						<Text fontWeight="bold" fontSize="xl" color="white">
							Get Started Free
						</Text>

						<Icon as={ArrowRight} size="20px" />
					</Button>
					<Button rounded="full" borderWidth="1px" borderColor="gray.400" py="16px" px="32px" h="fit-content">
						<Text fontWeight="bold" fontSize="xl" color="black">
							View Demo
						</Text>
					</Button>
				</Stack>
				<Stack flexDir="row" alignItems="center" gap="1rem">
					<Stack flexDir="row" alignItems="center" gap="0">
						<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" borderColor="white" borderWidth="1px" />
						<Avatar
							name="Segun Adebayo"
							src="https://bit.ly/sage-adebayo"
							ml="-4px"
							borderColor="white"
							borderWidth="1px"
						/>
						<Avatar
							name="Segun Adebayo"
							src="https://bit.ly/sage-adebayo"
							ml="-4px"
							borderColor="white"
							borderWidth="1px"
						/>
						<Avatar
							name="Segun Adebayo"
							src="https://bit.ly/sage-adebayo"
							ml="-4px"
							borderColor="white"
							borderWidth="1px"
						/>
					</Stack>
					<Stack flexDir="column" gap={"2px"}>
						<Rating colorPalette="yellow" readOnly size="md" defaultValue={5} bgColor="white" />
						<Text color="gray.800" fontSize="md">
							From 100+ happy users
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};
export default HeroComponent;
