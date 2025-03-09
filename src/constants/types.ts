interface SingleIconTab {
    id: number;
    label: string;
    icon: React.ElementType;
}

export interface HeaderIconTabs extends SingleIconTab { 
    iconSecondary?: React.ElementType;
    children?: SingleIconTab[];
}
