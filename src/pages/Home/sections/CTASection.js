import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
	return (
		<Stack w="100vw" bgColor="#f9fafb" px="16px" py="96px" alignItems="center" justifyContent="center">
			<Text color="black" fontSize="4xl" fontWeight="bold" textAlign="center">
				Start tracking expenses today
			</Text>
			<Text color="gray.500" fontSize="2xl" maxW="42rem" textAlign="center" mb="24px">
				Join thousands of users who are already saving money and making better financial decisions.
			</Text>
			<Button bgColor="blue.600" py="16px" px="32px" h="fit-content" rounded="full">
				<Text fontWeight="bold" fontSize="xl" color="white" textAlign="center">
					Get Started Free
				</Text>
				<Icon as={ArrowRight} size="20px" color="white" />
			</Button>
		</Stack>
	);
};
export default CTASection;
