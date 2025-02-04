import { Icon } from "@chakra-ui/react";
import { DollarSign } from "lucide-react";

const IconComponent = ({ size = 18, color = "black", icon = DollarSign }) => {
	const AppIcon = icon;
	return (
		<Icon color={color}>
			<AppIcon size={size} />
		</Icon>
	);
};
export default IconComponent;
