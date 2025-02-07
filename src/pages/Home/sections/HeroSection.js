import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { ArrowRight, Zap } from "lucide-react";
import { Rating } from "../../../components/ui/Rating";
import { Avatar } from "../../../components/ui/Avatar";

const HeroComponent = () => {
	return (
		<Stack direction="column" py="80px" px="16px" maxW="1280px" w="100%">
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
				mb={6}
			>
				<Icon color="blue.600">
					<Zap size="14px" />
				</Icon>
				<Text color="blue.600" fontWeight="medium" fontSize="sm">
					Track expenses like a pro
				</Text>
			</Stack>
			<Stack flexDir="column" gap="32px">
				<Text color="black" fontSize={{ base: "6xl", md: "7xl" }} fontWeight="bold" maxW="896px" lineHeight="0.8">
					The fastest way to track your expenses
				</Text>
				<Text color="gray.600" fontSize="xl" maxW="672px" fontWeight="medium">
					Stop using spreadsheets. Start using a modern expense tracker that helps you understand where your money goes.
					Built for individuals like you.
				</Text>
				<Stack flexDir={{ base: "column", md: "row" }} gap="1" alignItems={{ base: "start", md: "center" }} w="100%">
					<Button
						bgColor="blue.600"
						py="16px"
						px="32px"
						h="fit-content"
						rounded="full"
						maxW={{ base: "100%", md: "50%" }}
						w={{ base: "100%", md: "fit-content" }}
					>
						<Text fontWeight="bold" fontSize="xl" color="white">
							Get Started Free
						</Text>

						<Icon as={ArrowRight} size="20px" color="white" />
					</Button>
					<Button
						rounded="full"
						borderWidth="1px"
						borderColor="gray.300"
						py="16px"
						px="32px"
						h="fit-content"
						maxW={{ base: "100%", md: "50%" }}
						w={{ base: "100%", md: "fit-content" }}
					>
						<Text fontWeight="regular" fontSize="xl" color="gray.600">
							View Demo
						</Text>
					</Button>
				</Stack>
				<Stack flexDir="row" alignItems="center" gap="1rem">
					{/* <Stack flexDir="row" alignItems="center" gap="0">
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
					</Stack> */}
					<Stack flexDir="column" gap={"2px"}>
						<Rating colorPalette="yellow" readOnly size="md" defaultValue={5} />
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
