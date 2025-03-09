import { HStack, Icon } from "@chakra-ui/react"
import { headerIcons } from "../../../constants/layout"
const Header = () => {
    return (
        <HStack w="100%" p={3} bg="gray.600" borderBottom="1px solid" borderColor="gray.200">
            {headerIcons.map((icon) => (
                <Icon key={icon.label} color="white" as={icon.icon} />
            ))}
        </HStack>
    )
}

export default Header