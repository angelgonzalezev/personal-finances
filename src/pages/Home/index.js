import { Stack } from "@chakra-ui/react";
import NavBarComponent from "./sections/NavbarComponent";
import HeroComponent from "./sections/HeroComponent";

const Home = () => {
	return (
		<Stack direction="column" bgColor={"#f7fafc"} minH="100vh" w="100vw" alignItems={"center"}>
			<NavBarComponent />
			<HeroComponent />
			{/* <FeaturesComponent /> */}
		</Stack>
	);
};
export default Home;
