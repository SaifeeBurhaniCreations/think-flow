import { Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
const EditorHeader = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")}>Hiii</Box>
  )
}

export default EditorHeader