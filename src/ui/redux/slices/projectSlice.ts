import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  name: string;
  files: string[];
  type: 'ds' | 'ml' | null;
}

const initialState: ProjectState = {
  name: '',
  files: [],
  type: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<{ name: string; type: 'ds' | 'ml' | null }>) {
      state.name = action.payload.name;
      state.type = action.payload.type;
    },
    addFile(state, action: PayloadAction<string>) {
      state.files.push(action.payload);
    },
    setFiles(state, action: PayloadAction<string[]>) {
      state.files = action.payload;
    },
    clearProject(state) {
      state.name = '';
      state.files = [];
      state.type = null;
    },
  },
});

export const { setProject, addFile, setFiles, clearProject } = projectSlice.actions;
export default projectSlice.reducer;