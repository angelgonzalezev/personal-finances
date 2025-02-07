import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "./ui/Dialog";

const DialogComponent = ({ triggerElement, bodyElement, footerElement, title, open, setOpen }) => {
	return (
		<DialogRoot
			key={"center"}
			placement={"center"}
			motionPreset="slide-in-bottom"
			role="alertdialog"
			closeOnInteractOutside
			open={open}
		>
			<DialogTrigger onClick={() => setOpen(true)}>{triggerElement}</DialogTrigger>
			<DialogContent bgColor="white" p="6" rounded="2xl" boxShadow="0 10px 15px rgba(0, 0, 0, 0.2)">
				{title && (
					<DialogHeader>
						<DialogTitle color="black" fontSize="3xl" fontWeight="bold">
							{title}
						</DialogTitle>
					</DialogHeader>
				)}
				<DialogBody>{bodyElement}</DialogBody>
				{footerElement && <DialogFooter w={"100%"}>{footerElement}</DialogFooter>}
				<DialogCloseTrigger onClick={() => setOpen(false)} _hover={{ backgroundColor: "gray.50" }} color="black" />
			</DialogContent>
		</DialogRoot>
	);
};
export default DialogComponent;
