import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import DialogComponent from "./DialogComponent";
import { DollarSign } from "lucide-react";
import SetIncomeComponent from "./SetIncomeComponent";
import { createUser } from "../redux/states/user";
import supabase from "../supabase/supabaseClient";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ActionsComponent = ({ currentMonthlyIncome, currentError }) => {
	const [error, setError] = useState(currentError);

	const [monthlyIncome, setMonthlyIncome] = useState(currentMonthlyIncome);
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMonthlyIncome(value);
	};

	const onSave = async () => {
		const { error } = await supabase.from("incomes").insert([{ amount: monthlyIncome }]);
		if (error) {
			setOpen(true);
			setError(error.message);
		} else {
			dispatch(createUser({ timestamp: Date.now }));
			setError(undefined);
			setOpen(false);
		}
	};
	return (
		<DialogComponent
			title="Monthly Income"
			triggerElement={
				<Stack
					flexDir="row"
					alignItems="center"
					as={Button}
					_hover={{ cursor: "pointer", bgColor: "gray.50" }}
					py={2}
					px={4}
					borderRadius="lg"
					bgColor="white"
					w="100%"
					borderWidth="1px"
					borderColor="gray.400"
					cursor="pointer"
				>
					<Icon color="black">
						<DollarSign />
					</Icon>
					<Text color="black" fontSize={{ base: "xs", md: "lg" }}>
						Set Income
					</Text>
				</Stack>
			}
			bodyElement={<SetIncomeComponent handleOnChange={handleOnChange} error={error} monthlyIncome={monthlyIncome} />}
			footerElement={
				<Button
					px="16px"
					py="8px"
					borderRadius="full"
					bgColor="blue.600"
					color="white"
					onClick={onSave}
					w="100%"
					mt={2}
				>
					Save Income
				</Button>
			}
			open={open}
			setOpen={setOpen}
		/>
	);
};
export default ActionsComponent;
