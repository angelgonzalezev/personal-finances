import { Box, Button, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../supabase/supabaseClient";

const FeedbackInputComponent = ({ setOpen }) => {
	const [feedback, setFeedback] = useState("");
	const [error, setError] = useState("");

	const handleOnCancel = () => {
		setFeedback("");
		setOpen(false);
	};

	const handleOnChange = (e) => {
		const { value } = e.target;
		setFeedback(value);
	};

	const handleOnSend = async () => {
		if (!feedback.length) {
			setError("Write a feedback before sending!");
		} else {
			const { error } = await supabase.from("feedback").insert([{ feedback }]);
			if (error) {
				setError(error.message);
			} else {
				setFeedback("");
				setOpen(false);
			}
		}
	};

	return (
		<Box>
			<Textarea
				placeholder="Feel free to share ideas on how to improve this!"
				_focusVisible={{
					borderWidth: "1px",
					borderColor: "gray.400",
					outlineStyle: "none",
				}}
				onChange={handleOnChange}
				value={feedback}
			/>
			{error && (
				<Text color="red" fontSize="xs">
					{error}
				</Text>
			)}
			<Box w="100%" h="1px" bgColor="gray.700" my={4} />
			<Stack flexDir="row" alignItems="center" justifyContent="space-between">
				<Button size="xs" variant="outline" borderColor="gray.600" onClick={handleOnCancel}>
					Cancel
				</Button>
				<Button
					size="xs"
					variant="outline"
					borderWidth="0.5px"
					borderColor="gray.500"
					bgColor="green.600"
					onClick={handleOnSend}
				>
					Send feedback
				</Button>
			</Stack>
		</Box>
	);
};
export default FeedbackInputComponent;
