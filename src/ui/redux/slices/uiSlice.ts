import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  theme: 'dark' | 'light';
  activePanel: 'ai' | 'dataset' | 'model';
}

const initialState: UIState = {
  theme: 'light',
  activePanel: 'ai',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme(state, action: { payload: 'dark' | 'light' }) {
      state.theme = action.payload;
    },
    setActivePanel(state, action: { payload: 'ai' | 'dataset' | 'model' }) {
      state.activePanel = action.payload;
    },
  },
});

export const { setTheme, setActivePanel } = uiSlice.actions;
export default uiSlice.reducer;