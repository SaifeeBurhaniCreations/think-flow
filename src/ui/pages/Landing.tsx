import { Heading, HStack, Icon, RadioCard, VStack } from "@chakra-ui/react"
import { RiFolderFill, RiTerminalBoxFill, RiGitBranchLine } from "react-icons/ri"


const items = [
  { value: "open_project", title: "Open project", icon: <RiFolderFill /> },
  { value: "clone_repo", title: "Clone repo", icon: <RiGitBranchLine   /> },
  { value: "connect_via_ssh", title: "Connect via SSH", icon: <RiTerminalBoxFill /> },
]

const Landing = () => {
  return (
    <VStack justifyContent="center" alignItems="center" h="100vh">
      <Heading>ThinkFlow</Heading>

      <RadioCard.Root
        orientation="vertical"
        align="center"
        defaultValue="open_project"
        w="500px"
      >
        <HStack>
          {items.map((item) => (
            <RadioCard.Item key={item.value} value={item.value}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl>
                <Icon fontSize="2xl" color="fg.muted">
                  {item.icon}
                </Icon>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>
    </VStack>

  )
}

export default Landing