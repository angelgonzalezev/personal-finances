import { Box, Center, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { Avatar } from "../../../components/ui/Avatar";

const TestimonialSection = () => {
	return (
		<Stack w="100vw" px="16px" py="96px" alignItems="center" justifyContent="center">
			<Text color="black" fontSize="4xl" fontWeight="bold" mb="64px">
				Loved by financial experts
			</Text>
			<Box w="100%" maxW="80rem" alignItems="center" justifyContent="center">
				<Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap="6" w="100%">
					<Stack
						p="32px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.600">
								<Quote size="40px" />
							</Icon>
						</Center>
						<Text fontSize="lg" color="black" mb="16px">
							Finally, an expense tracker that actually makes sense. The insights have helped me save 30% more each
							month.
						</Text>
						<Stack flexDir="row" alignItems="center" gap="6">
							<Avatar name="Segun Adebayo" src="https://i.pravatar.cc/120?img=4" />
							<Stack flexDir="column" gap="3px">
								<Text fontSize="lg" fontWeight="semibold" color="black" lineHeight={0}>
									Sarah Chen
								</Text>
								<Text color="gray.600">Financial Advisor</Text>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						p="32px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.600">
								<Quote size="40px" />
							</Icon>
						</Center>
						<Text fontSize="lg" color="black" mb="16px">
							Finally, an expense tracker that actually makes sense. The insights have helped me save 30% more each
							month.
						</Text>
						<Stack flexDir="row" alignItems="center" gap="6">
							<Avatar name="Segun Adebayo" src="https://i.pravatar.cc/120?img=5" />
							<Stack flexDir="column" gap="3px">
								<Text fontSize="lg" fontWeight="semibold" color="black" lineHeight={0}>
									Michael Rodriguez
								</Text>
								<Text color="gray.600">Small Business Owner</Text>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						p="32px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.600">
								<Quote size="40px" />
							</Icon>
						</Center>
						<Text fontSize="lg" color="black" mb="16px">
							Finally, an expense tracker that actually makes sense. The insights have helped me save 30% more each
							month.
						</Text>
						<Stack flexDir="row" alignItems="center" gap="6">
							<Avatar name="Segun Adebayo" src="https://i.pravatar.cc/120?img=6" />
							<Stack flexDir="column" gap="3px">
								<Text fontSize="lg" fontWeight="semibold" color="black" lineHeight={0}>
									Emily Thompson
								</Text>
								<Text color="gray.600">Operations Director</Text>
							</Stack>
						</Stack>
					</Stack>
				</Grid>
			</Box>
		</Stack>
	);
};
export default TestimonialSection;
