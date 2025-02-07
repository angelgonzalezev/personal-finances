import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from "./ui/Popover";
import FeedbackInputComponent from "./FeedbackInputComponent";

const FeedbackComponent = ({ open, setOpen, triggerElement }) => {
	return (
		<PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
			<PopoverTrigger asChild bgColor="yellow.400" _hover={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
				{triggerElement}
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverBody backgroundColor="gray.900" borderRadius="2xl">
					<FeedbackInputComponent setOpen={setOpen} />
				</PopoverBody>
			</PopoverContent>
		</PopoverRoot>
	);
};
export default FeedbackComponent;
