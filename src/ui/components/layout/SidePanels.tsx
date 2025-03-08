import React, { useEffect, useState } from 'react';
import { Button, Tabs } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "../../../components/ui/drawer";

import AIChat from '../features/AIChat';
import DatasetExplorer from '../features/DatasetExplorer';
import ModelDashboard from '../features/ModelDashboard';

const SidePanels: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'r') {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerContent display="flex" flexDirection="column" h="100vh">
        <Tabs.Root defaultValue="ai_chat" variant="outline" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <DrawerHeader>
            <Tabs.List>
              <Tabs.Trigger value="ai_chat">AI Chat</Tabs.Trigger>
              <Tabs.Trigger value="dataset">Dataset</Tabs.Trigger>
              <Tabs.Trigger value="model">Model</Tabs.Trigger>
            </Tabs.List>
          </DrawerHeader>

          <DrawerBody flex="1" overflowY="auto">
            <Tabs.Content value="ai_chat" h="100%">
              <AIChat />
            </Tabs.Content>
            <Tabs.Content value="dataset">
              <DatasetExplorer />
            </Tabs.Content>
            <Tabs.Content value="model">
              <ModelDashboard />
            </Tabs.Content>
          </DrawerBody>
        </Tabs.Root>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SidePanels;
