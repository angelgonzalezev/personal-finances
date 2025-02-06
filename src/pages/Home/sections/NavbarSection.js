import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { Sparkles } from "lucide-react";
import DialogComponent from "../../../components/DialogComponent";
import RegistrationComponent from "../../../components/RegistrationComponent";
import { useState } from "react";
import { createUser } from "../../../redux/states/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import supabase from "../../../supabase/supabaseClient";
import { PrivateRoutes } from "../../../routes/routes";

const NavBarComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [form, setForm] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleSignup = async () => {
		const { data, error } = await supabase.auth.signUp(form);
		if (error?.code === "user_already_exists") {
			const { data, error } = await supabase.auth.signInWithPassword(form);
			if (error) {
				setError(error);
			} else if (data.user && data.session) {
				const { id } = data.user;
				dispatch(createUser({ id }));
				navigate(PrivateRoutes.Dashboard);
			}
		} else if (error) {
			setError(error);
		} else if (data.user && data.session) {
			const { id } = data.user;
			dispatch(createUser({ id }));
			navigate(PrivateRoutes.Dashboard);
		}
	};

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			px={"24px"}
			py={"16px"}
			maxW="1280px"
			w="100%"
		>
			<Stack direction="row" spacing={4}>
				<Icon as={Sparkles} color="blue.600" size={"24px"} />
				<Text color="#111827" fontWeight="bold">
					ExpenseTracker
				</Text>
			</Stack>
			<DialogComponent
				title={"Create an account"}
				triggerElement={
					<Button px="16px" py="8px" borderRadius="full" bgColor="blue.600" color="white">
						Sign In
					</Button>
				}
				bodyElement={<RegistrationComponent setForm={setForm} form={form} error={error} />}
				footerElement={
					<Button px="16px" py="8px" borderRadius="full" bgColor="blue.600" color="white" onClick={handleSignup}>
						Sign up
					</Button>
				}
				setOpen={setOpen}
				open={open}
			/>
		</Stack>
	);
};
export default NavBarComponent;
