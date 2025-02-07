import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { DollarSign, LogOutIcon } from "lucide-react";
import DialogComponent from "./DialogComponent";
import SetIncomeComponent from "./SetIncomeComponent";
import supabase from "../supabase/supabaseClient";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/states/user";
import { toaster } from "./ui/Toaster";

const HeaderComponent = ({ currentError, currentMonthlyIncome }) => {
	const [error, setError] = useState(currentError);
	const [monthlyIncome, setMonthlyIncome] = useState(currentMonthlyIncome);
	const [open, setOpen] = useState(false);
	const userState = useSelector((store) => store.user);
	const dispatch = useDispatch();

	useEffect(() => {
		const getLastIncome = async () => {
			const { data, error } = await supabase
				.from("incomes")
				.select("amount")
				.eq("user_id", userState.id)
				.order("created_at", { ascending: false }) // Fallback to created_at if dates are the same
				.limit(1);
			if (error) {
				setError(error.message);
			} else if (data.length > 0) {
				setMonthlyIncome(data[0].amount);
			}
		};
		getLastIncome();
	}, [userState.id]);

	const handleOnChange = (e) => {
		const { value } = e.target;
		setMonthlyIncome(value);
	};

	const onSave = async () => {
		const { error } = await supabase.from("incomes").insert([{ amount: monthlyIncome, user_id: userState.id }]);
		if (error) {
			setOpen(true);
			setError(error.message);
		} else {
			setError(undefined);
			setOpen(false);
		}
	};

	const handleSignOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (!error) {
			window.location.reload();
		}
	};

	return (
		<Stack
			h="76px"
			w="100%"
			boxShadow="0 5px 24px rgba(0,0,0, 0.1)"
			bgColor="white"
			justifyContent="center"
			alignItems="center"
			px={4}
		>
			<Stack flexDirection="row" alignItems="center" justifyContent="space-between" maxW="896px" w="100%">
				<Text color="black" fontSize={{ base: "sm", sm: "md", md: "2xl", lg: "4xl" }} fontWeight="bold">
					My Expenses
				</Text>
				<Stack flexDir="row" gap={10}>
					<DialogComponent
						title="Monthly Income"
						triggerElement={
							<Stack
								flexDir="row"
								alignItems="center"
								_hover={{ cursor: "pointer", bgColor: "gray.50" }}
								py={2}
								px={4}
								borderRadius="lg"
							>
								<Icon color="black">
									<DollarSign />
								</Icon>
								<Text color="black" fontSize={{ base: "xs", md: "lg" }}>
									Set Income
								</Text>
							</Stack>
						}
						bodyElement={
							<SetIncomeComponent handleOnChange={handleOnChange} error={error} monthlyIncome={monthlyIncome} />
						}
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
					<Stack
						flexDir="row"
						alignItems="center"
						_hover={{ cursor: "pointer", bgColor: "gray.50" }}
						py={2}
						px={4}
						borderRadius="lg"
						onClick={handleSignOut}
					>
						<Icon color="black" as={LogOutIcon}>
							<LogOutIcon />
						</Icon>
						<Text color="black" fontSize={{ base: "xs", md: "lg" }}>
							Sign out
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};
export default HeaderComponent;
