import Editor from "../components/Editor"
import FolderTree from "../components/FolderTree"
import SidePanels from "../components/SidePanels"

const Main = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px" }}>
    <FolderTree />
    <Editor />
    <SidePanels />
    </div>
  )
}

export default Main