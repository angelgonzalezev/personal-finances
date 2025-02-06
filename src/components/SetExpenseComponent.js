import { Box, Grid, Input, Stack, Text } from "@chakra-ui/react";
import { InputGroup } from "./ui/InputGroup";
import { DollarSign } from "lucide-react";
import { Fragment } from "react";
import { Categories } from "../constants/categories";
import { capitalizeFirstLetter } from "../utilities/utils";

const ResponsiveGrid = ({ tag, setTag }) => {
	return (
		<Fragment>
			<Text color="black" fontSize="sm" fontWeight="semibold" mt="6">
				Category
			</Text>
			<Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={3}>
				{Categories.map((category, index) => (
					<Box
						key={index}
						color="white"
						p={4}
						borderRadius="lg"
						textAlign="center"
						borderWidth="1px"
						borderColor={category.categoryTag === tag ? "blue.600" : "gray.200"}
						_hover={
							category.categoryTag === tag
								? { borderColor: "blue.600", bgColor: "blue.200" }
								: { borderColor: "gray.300" }
						}
						onClick={() => setTag(category.categoryTag)}
					>
						<Text fontSize="3xl">{category.icon}</Text>
						<Text color={category.categoryTag === tag ? "blue.600" : "black"} fontSize="sm" fontWeight="medium" mt={3}>
							{capitalizeFirstLetter(category.categoryTag)}
						</Text>
					</Box>
				))}
			</Grid>
		</Fragment>
	);
};

const SetExpenseComponent = ({ handleOnChange, error, amount, setTag, tag }) => {
	return (
		<Stack flexDir="column" w="100%" alignItems="start">
			<Stack flexDir="column" gap={2} w="100%">
				<Text color="gray.800" fontSize="sm" fontWeight="semibold">
					Amount
				</Text>
				<InputGroup flex="1" startElement={<DollarSign color="rgba(1,1,1,0.4)" />}>
					<Input
						placeholder="0.00"
						onChange={handleOnChange}
						type="number"
						color="black"
						fontSize="md"
						value={amount}
						borderRadius="lg"
						borderWidth="1px"
						borderColor="gray.200"
					/>
				</InputGroup>
				<ResponsiveGrid tag={tag} setTag={setTag} />
			</Stack>
			{error && <Text color="red">{error}</Text>}
		</Stack>
	);
};
export default SetExpenseComponent;
