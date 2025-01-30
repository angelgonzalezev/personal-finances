import { Stack } from "@chakra-ui/react";
import NavBarComponent from "./components/NavbarComponent";

function App() {
	return (
		<Stack direction="column" bgColor={"#f7fafc"} minH="100vh" w="100vw" alignItems={"center"}>
			<NavBarComponent />
		</Stack>
	);
}

export default App;
