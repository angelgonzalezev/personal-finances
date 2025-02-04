import {
	DialogActionTrigger,
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
			onOpenChange={(e) => setOpen(e.open)}
		>
			<DialogTrigger>{triggerElement}</DialogTrigger>
			<DialogContent bgColor="white" p="6" rounded="2xl" boxShadow="0 10px 15px rgba(0, 0, 0, 0.2)">
				{title && (
					<DialogHeader>
						<DialogTitle color="black" fontSize="3xl" fontWeight="bold">
							{title}
						</DialogTitle>
					</DialogHeader>
				)}
				<DialogBody>{bodyElement}</DialogBody>
				{footerElement && (
					<DialogFooter w={"100%"}>
						<DialogActionTrigger w={"100%"}>{footerElement}</DialogActionTrigger>
					</DialogFooter>
				)}
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
};
export default DialogComponent;
