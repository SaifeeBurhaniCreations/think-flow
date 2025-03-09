import { RiFolderFill, RiTerminalBoxFill, RiGitBranchLine } from "react-icons/ri"

export const landingTabs: { value: string; title: string; icon: React.ElementType }[] = [
    { value: "open_project", title: "Open project", icon: RiFolderFill },
    { value: "clone_repo", title: "Clone repo", icon: RiGitBranchLine },
    { value: "connect_via_ssh", title: "Connect via SSH", icon: RiTerminalBoxFill },
];
