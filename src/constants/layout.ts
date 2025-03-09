import { RiFile3Line, RiGitBranchLine, RiSearch2Line} from "react-icons/ri"
import { VscExtensions } from "react-icons/vsc"
import { IoFlaskOutline, IoLogoDocker } from "react-icons/io5"
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi"
export const headerIcons = [
    { id : 0, icon: RiFile3Line, label: "Files" },
    { id : 1, icon: RiSearch2Line, label: "Search" },
    { id : 2, icon: RiGitBranchLine, label: "Branches" },
    { id : 3, icon: VscExtensions, label: "Extensions" },
    { id : 4, icon: HiOutlineChevronDown, label: "More", iconSecondary: HiOutlineChevronUp, children: [
        { id : 0, icon: IoLogoDocker, label: "Docker" },
        { id : 1, icon: IoFlaskOutline, label: "PlaywUpHiOutlineChevronUp" },
    ] },
]