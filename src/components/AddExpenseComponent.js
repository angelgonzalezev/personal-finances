import { Button, Icon } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import DialogComponent from "./DialogComponent";
import supabase from "../supabase/supabaseClient";
import { useDispatch } from "react-redux";
import SetExpenseComponent from "./SetExpenseComponent";
import { createUser } from "../redux/states/user";

const AddExpenseComponent = () => {
	const [open, setOpen] = useState(false);
	const [amount, setAmount] = useState();
	const [error, setError] = useState("");
	const [tag, setTag] = useState("");
	const dispatch = useDispatch();

	const validateForm = () => {
		if (!amount || amount <= 0) {
			setError("It is necessary to inset amount.");
			return false;
		}
		if (!tag || !tag.length) {
			setError("It is necesary to select category tag.");
			return false;
		}
		return true;
	};

	const handleAddExpense = async () => {
		const isValid = validateForm();
		if (isValid) {
			const { error } = await supabase.from("expenses").insert([{ amount, tag }]);
			if (error) {
				setError(error.message);
			} else {
				dispatch(createUser({ timestamp: Date.now }));
				setError(undefined);
				setTag(undefined);
				setAmount(undefined);
				setOpen(false);
			}
		}
	};

	const handleOnChange = (e) => {
		const { value } = e.target;
		setAmount(value);
	};

	return (
		<DialogComponent
			title={"Add Expense"}
			triggerElement={
				<Button
					position="fixed"
					size="xl"
					w="3.5rem"
					h="3.5rem"
					bgColor={"blue.600"}
					rounded="full"
					bottom={6}
					right={6}
					_hover={{ bgColor: "blue.500" }}
				>
					<Icon>
						<Plus color="white" />
					</Icon>
				</Button>
			}
			bodyElement={
				<SetExpenseComponent handleOnChange={handleOnChange} error={error} amount={amount} setTag={setTag} tag={tag} />
			}
			footerElement={
				<Button
					px="16px"
					py="8px"
					borderRadius="full"
					bgColor="blue.600"
					color="white"
					onClick={handleAddExpense}
					w="100%"
				>
					+ Add Expense
				</Button>
			}
			setOpen={setOpen}
			open={open}
		/>
	);
};
export default AddExpenseComponent;
