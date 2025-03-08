import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/projectSlice';
import editorSlice from './slices/editorSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    project: projectSlice,
    editor: editorSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;