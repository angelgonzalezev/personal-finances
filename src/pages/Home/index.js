import { Stack } from "@chakra-ui/react";
import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
import FeatureSection from "./sections/FeatureSection";

const Home = () => {
	return (
		<Stack direction="column" bgColor={"white"} minH="100vh" w="100vw" alignItems={"center"}>
			<NavbarSection />
			<HeroSection />
			<FeatureSection />
		</Stack>
	);
};
export default Home;
