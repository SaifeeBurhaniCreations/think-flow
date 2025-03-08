import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  content: string;
  mode: 'code' | 'notebook';
  activeFile: string;
}

const initialState: EditorState = {
  content: '',
  mode: 'code',
  activeFile: '',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    setMode(state, action: PayloadAction<'code' | 'notebook'>) {
      state.mode = action.payload;
    },
    setActiveFile(state, action: PayloadAction<string>) {
      state.activeFile = action.payload;
    },
    clearEditor(state) {
      state.content = '';
      state.mode = 'code';
      state.activeFile = '';
    },
  },
});

export const { setContent, setMode, setActiveFile, clearEditor } = editorSlice.actions;
export default editorSlice.reducer;