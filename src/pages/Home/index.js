import { Stack } from "@chakra-ui/react";
import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
import FeatureSection from "./sections/FeatureSection";
import TestimonialSection from "./sections/TestimonialSection";
import CTASection from "./sections/CTASection";

const Home = () => {
	return (
		<Stack direction="column" bgColor={"white"} minH="100vh" w="100vw" alignItems={"center"}>
			<NavbarSection />
			<HeroSection />
			<FeatureSection />
			<TestimonialSection />
			<CTASection />
		</Stack>
	);
};
export default Home;
