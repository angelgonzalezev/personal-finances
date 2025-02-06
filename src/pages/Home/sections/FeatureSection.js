import { Box, Center, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { BadgeCheck, Shield, Zap } from "lucide-react";

const FeatureSection = () => {
	return (
		<Stack w="100%" bgColor="#f9fafb" px="16px" py="96px" alignItems="center" justifyContent="center">
			<Box w="100%" maxW="80rem" alignItems="center" justifyContent="center">
				<Grid templateColumns="repeat(3, 1fr)" gap="6" w="100%">
					<Stack
						p="24px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
						bgColor="white"
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.500">
								<Shield size="24px" />
							</Icon>
						</Center>
						<Text fontSize="2xl" color="black" fontWeight="bold">
							Bank-grade security
						</Text>
						<Text fontSize="md" color="black">
							Your data is encrypted and stored securely. We use the same security as major banks.
						</Text>
					</Stack>
					<Stack
						p="24px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
						bgColor="white"
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.500">
								<Zap size="24px" />
							</Icon>
						</Center>
						<Text fontSize="2xl" color="black" fontWeight="bold">
							Lightning fast
						</Text>
						<Text fontSize="md" color="black">
							Add expenses in seconds. Get insights instantly with our real-time analytics.
						</Text>
					</Stack>
					<Stack
						p="24px"
						borderWidth="1px"
						borderColor="gray.200"
						rounded="xl"
						flexDir="column"
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							shadow: "md",
							boxShadow: "0px 4px 10px rgba(1, 1, 1, 0.3)",
						}}
						bgColor="white"
					>
						<Center p="16px" bgColor="#eff6ff" h="3rem" w="3rem" rounded="full" mb="16px">
							<Icon color="blue.500">
								<BadgeCheck size="24px" />
							</Icon>
						</Center>
						<Text fontSize="2xl" color="black" fontWeight="bold">
							Built for scale
						</Text>
						<Text fontSize="md" color="black">
							Whether you're an individual or a team, our platform grows with your needs.
						</Text>
					</Stack>
				</Grid>
			</Box>
		</Stack>
	);
};
export default FeatureSection;
