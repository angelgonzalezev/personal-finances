import { Stack } from "@chakra-ui/react";
import NavBarComponent from "../../components/NavbarComponent";
import HeroComponent from "../../components/HeroComponent";

const Home = () => {
	return (
		<Stack direction="column" bgColor={"#f7fafc"} minH="100vh" w="100vw" alignItems={"center"}>
			<NavBarComponent />
			<HeroComponent />
		</Stack>
	);
};
export default Home;
