import { Text, VStack, HStack, Icon, Box } from "@chakra-ui/react";
import { useState, useCallback, useMemo } from "react";
import { HeaderIconTabs, TreeNode } from "../../../constants/types";
import { headerIcons } from "../../../constants/layout";
import Dropdown from "../../../components/custom/Dropdown";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TAB_IDS = {
  DEFAULT: 0,
  GIT: 2,
  MORE: 4,
} as const;

const FolderTree: React.FC = () => {
  const { tree } = useSelector((state: RootState) => state.folder);
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<number>(TAB_IDS.DEFAULT);

  const handleTabClick = useCallback((icon: HeaderIconTabs) => {
    setActiveTab((prev) => (icon.label === "More" && prev === icon.id ? TAB_IDS.DEFAULT : icon.id));
  }, []);

  const toggleFolder = useCallback((key: string) => {
    setOpenFolders((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const renderFolderTree = useMemo(() => {
    const renderItems = (items: TreeNode[], depth = 0) => (
      items.map((item, index) => {
        const uniqueKey = `${item.name || index}-${item.type}`;
        const isOpen = openFolders[uniqueKey] || false;

        return item.type === "folder" ? (
          <Box key={uniqueKey} pl={depth * 4}>
            <HStack cursor="pointer" onClick={() => toggleFolder(uniqueKey)}>
              <Icon as={isOpen ? HiOutlineChevronDown : HiOutlineChevronRight} />
              <Text fontWeight="bold">{item.name}</Text>
            </HStack>

            {isOpen && item.children && (
              <Box>{renderItems(item.children, depth + 1)}</Box>
            )}
          </Box>
        ) : (
          <Text key={uniqueKey} pl={depth * 4 + 4}>
            {item.name}
          </Text>
        );
      })
    );
    return tree ? renderItems(tree) : null;
  }, [tree, openFolders, toggleFolder]);

  return (
    <VStack
      gap={4}
      w="15%"
      h="100%"
      overflowY="auto"
      maxH="90vh"
      bg="gray.100"
      borderRight="1px solid"
      borderColor="gray.200"
      position="relative"
      align="start"
    >
      {/* Header Icons */}
      <HStack
        w="100%"
        p={3}
        gap={4}
        justifyContent="center"
        bg="orange.400"
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        {headerIcons.map((icon) => (
          <Icon
            key={icon.id}
            size="md"
            cursor="pointer"
            as={icon.icon}
            color={activeTab === icon.id ? "white" : "gray.700"}
            onClick={() => handleTabClick(icon)}
          />
        ))}
      </HStack>

      {/* Tabs Content */}
      {activeTab === TAB_IDS.DEFAULT && (
        <VStack w="100%" p={2} gap={2} align="start">
          {renderFolderTree}
        </VStack>
      )}
      {activeTab === TAB_IDS.MORE && <Dropdown />}

      {activeTab === TAB_IDS.GIT && (
        <VStack w="100%" p={2} gap={2} align="start">
          {Array(7).fill(<Text>Git</Text>)}
        </VStack>
      )}
    </VStack>
  );
};

export default FolderTree;
