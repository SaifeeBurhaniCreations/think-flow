import { configureStore } from '@reduxjs/toolkit';
import projectSlice from './slices/projectSlice';
import editorSlice from './slices/editorSlice';
import uiSlice from './slices/uiSlice';
import folderReducer from './slices/folderTreeSlice';

export const store = configureStore({
  reducer: {
    project: projectSlice,
    editor: editorSlice,
    ui: uiSlice,
    folder: folderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;