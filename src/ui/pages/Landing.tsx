import { Heading, HStack, Icon, RadioCard, VStack } from "@chakra-ui/react"
import { landingTabs } from "../../constants/landing_page"
import { openDialogBox } from "../lib/folderSystem"
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <VStack justifyContent="center" alignItems="center" h="100vh" gap={8}>
      <Heading fontSize="4xl">ThinkFlow</Heading>

      <RadioCard.Root
        orientation="vertical"
        align="center"
        w="500px"
      >
        <HStack>
          {landingTabs.map((tab) => {
            const isOpenFolder = tab.value === "open_project";
            const isSSH = tab.value === "connect_via_ssh";
            return (
              <RadioCard.Item key={tab.value} value={tab.value}>
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl cursor="pointer" onClick={() => isOpenFolder ? openDialogBox() : isSSH ? navigate("/main") : console.log("not open folder")}>
                  <Icon as={tab.icon} fontSize="2xl" color="fg.muted" />
                  <RadioCard.ItemText>{tab.title}</RadioCard.ItemText>
                </RadioCard.ItemControl>
              </RadioCard.Item>
            )
          })}
        </HStack>
      </RadioCard.Root>
    </VStack>

  )
}

export default Landing