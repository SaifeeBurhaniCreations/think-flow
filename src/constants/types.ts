interface SingleIconTab {
    id: number;
    label: string;
    icon: React.ElementType;
}

export interface HeaderIconTabs extends SingleIconTab { 
    iconSecondary?: React.ElementType;
    children?: SingleIconTab[];
}

export interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[]; 
}
