import React, { useState, FormEvent } from 'react';
import {
    Box,
    VStack,
    HStack,
    Input,
    Button,
    Text,
    Separator,
    Flex,
} from '@chakra-ui/react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Hello! How can I assist you today?', isUser: false },
    ]);
    const [input, setInput] = useState<string>('');

    const handleSend = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { id: messages.length + 1, text: input, isUser: true };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const aiMessage: Message = {
                id: messages.length + 2,
                text: `Ai: ${userMessage.text}`,
                isUser: false,
            };
            setMessages((prev) => [...prev, aiMessage]);
        }, 500);
    };

    return (
        <Box
            h="100%"
            w="100%"
            p={4}
            bg={{ base: 'gray.100', _dark: 'gray.700' }}
            borderRadius="md"
            overflow="hidden"
        >
            <VStack gap={4} h="100%" justify="space-between">
                <Box flex="1" w="100%" overflowY="auto">
                    <VStack gap={2} align="stretch">
                        {messages.map((msg) => (
                            <Flex key={msg.id} justify={msg.isUser ? 'flex-end' : 'flex-start'}>
                                <Box
                                    maxW="70%"
                                    p={2}
                                    bg={msg.isUser ? { base: 'purple.100', _dark: 'purple.600' } : { base: 'orange.200', _dark: 'orange.600' }}
                                    borderRadius="md"
                                    boxShadow="sm"
                                >
                                    <Text fontSize="sm">{msg.text}</Text>
                                </Box>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
                <Separator />
                <form onSubmit={handleSend} style={{ width: '100%' }}>
                    <HStack gap={2}>
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            size="sm"
                            bg={{ base: 'whiteAlpha.900', _dark: 'gray.800' }}
                        />
                        <Button type="submit" bg="orange.500" color="white" size="sm" px={4}>
                            Send
                        </Button>


                    </HStack>
                </form>
            </VStack>
        </Box>
    );
};

export default AIChat;