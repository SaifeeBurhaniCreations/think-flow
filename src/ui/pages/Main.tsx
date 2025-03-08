import React, { Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as monaco from 'monaco-editor';
import FolderTree from '../components/layout/FolderTree';
import EditorHeader from '../components/layout/EditorHeader';
import SidePanels from '../components/layout/SidePanels';
import { RootState } from '../redux/store';
import { Box, HStack, Spinner } from '@chakra-ui/react';

const Main: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { content, mode } = useSelector((state: RootState) => state.editor);
  const { theme } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: content,
        language: 'python',
        theme: theme === 'dark' ? 'vs-dark' : 'vs',
      });
      return () => editor.dispose();
    }
  }, [content, theme]);

  return (
    <HStack className={`h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <FolderTree />
      <Box w="100%" h="100%">
        <EditorHeader />
        <Suspense fallback={<Spinner />}>
          <div ref={editorRef} className="h-[calc(100vh-4rem)]" style={{ width: "100%", height: "300px" }} />
        </Suspense>
      </Box>
      <SidePanels />
    </HStack>
  );
};

export default Main;