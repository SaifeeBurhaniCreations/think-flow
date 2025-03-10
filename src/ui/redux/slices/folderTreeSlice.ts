import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TreeNode } from "../../../constants/types";
interface FolderState {
  tree: TreeNode[] | null;
}

const initialState: FolderState = {
  tree: null,
};

const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolderTree: (state, action: PayloadAction<any>) => {
      state.tree = action.payload;
    },
    clearFolderTree: (state) => {
      state.tree = null;
    },
  },
});

export const { setFolderTree, clearFolderTree } = folderSlice.actions;
export default folderSlice.reducer;
