import { Text, VStack, HStack, Icon, Box } from "@chakra-ui/react";
import { useState, useCallback } from "react";

import { HeaderIconTabs } from "../../../constants/types"
import { headerIcons } from "../../../constants/layout";

const TAB_IDS = {
  DEFAULT: 0,
  MORE: 4,
} as const;

const FolderTree: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(TAB_IDS.DEFAULT);

  const handleTabClick = useCallback((icon: HeaderIconTabs) => {
    if (icon.label === "More") {
      setActiveTab((prev) => (prev === icon.id ? TAB_IDS.DEFAULT : icon.id));
    } else {
      setActiveTab(icon.id);
    }
  }, []);

  const getIconProps = (icon: HeaderIconTabs) => {
    const isActive = activeTab === icon.id;
    return {
      as: icon.label === "More" && isActive && icon.iconSecondary ? icon.iconSecondary : icon.icon,
      color: isActive ? "white" : "gray.700",
    };
  };

  return (
    <VStack
      gap={24}
      w="15%"
      h="100%"
      bg="gray.100"
      borderRight="1px solid"
      borderColor="gray.200"
      position="relative"
    >
      <HStack
        w="100%"
        p={3}
        gap={4}
        justifyContent="center"
        bg="orange.400"
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        {headerIcons.map((icon: HeaderIconTabs) => (
          <Icon
            key={icon.id}
            size="md"
            cursor="pointer"
            {...getIconProps(icon)}
            onClick={() => handleTabClick(icon)}
          />
        ))}
      </HStack>

      {activeTab === TAB_IDS.MORE && (
        <Box
          position="absolute"
          top="45px"
          left="0"
          w="100%"
          bg="white"
          boxShadow="lg"
          p={4}
          zIndex="overlay"
        >
          <VStack gap={4} align="stretch">
            <Text fontSize="lg" fontWeight="bold">
              Overlay Title
            </Text>
            <Text>This is some content inside the overlay.</Text>
          </VStack>
        </Box>
      )}

      <VStack w="100%" p={2} gap={2}>
        <Text>FolderTree</Text>
        <Text>FolderTree</Text>
        <Text>FolderTree</Text>
        <Text>FolderTree</Text>
        <Text>FolderTree</Text>
        <Text>FolderTree</Text>
      </VStack>
    </VStack>
  );
};

export default FolderTree;