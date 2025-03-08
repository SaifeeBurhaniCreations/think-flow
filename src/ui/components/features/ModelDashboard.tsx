import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Badge,
  Separator,
  SimpleGrid,
} from '@chakra-ui/react';

interface Model {
  id: number;
  name: string;
  status: 'training' | 'ready' | 'failed';
  accuracy: number;
}

const sampleModels: Model[] = [
  { id: 1, name: 'Linear Regression', status: 'ready', accuracy: 0.85 },
  { id: 2, name: 'Random Forest', status: 'training', accuracy: 0 },
  { id: 3, name: 'Neural Network', status: 'failed', accuracy: 0 },
];

const ModelDashboard: React.FC = () => {
  const getStatusColor = (status: Model['status']) => {
    switch (status) {
      case 'ready':
        return 'green';
      case 'training':
        return 'yellow';
      case 'failed':
        return 'red';
      default:
        return 'gray';
    }
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
      <VStack gap={4} h="100%" align="stretch">
        <Text fontSize="lg" fontWeight="bold">
          Model Dashboard
        </Text>
        <Box flex="1" overflowY="auto">
          <SimpleGrid columns={1} gap={4}>
            {sampleModels.map((model) => (
              <Box
                key={model.id}
                p={3}
                bg={{ base: 'white', _dark: 'gray.800' }}
                borderRadius="md"
                boxShadow="sm"
              >
                <HStack justify="space-between">
                  <VStack align="start" gap={1}>
                    <Text fontSize="md" fontWeight="medium">
                      {model.name}
                    </Text>
                    <Badge colorScheme={getStatusColor(model.status)}>
                      {model.status}
                    </Badge>
                  </VStack>
                  <Text fontSize="sm">
                    Accuracy: {model.accuracy > 0 ? `${(model.accuracy * 100).toFixed(1)}%` : 'N/A'}
                  </Text>
                </HStack>
                <Separator my={2} />
                <HStack gap={2}>
                  <Button size="sm" colorScheme="blue" variant="outline">
                    Retrain
                  </Button>
                  <Button size="sm" colorScheme="gray" variant="outline">
                    View Details
                  </Button>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default ModelDashboard;