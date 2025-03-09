import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Table,
  Text,
} from '@chakra-ui/react';
import { DatasetRow, sortDataset } from '../../lib/fileSystem';
import { loadDataset } from '../../lib/fileSystem';

const DatasetExplorer: React.FC = () => {
  const [data, setData] = useState<DatasetRow[]>([]);
  const [sortColumn, setSortColumn] = useState<keyof DatasetRow>('id');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await loadDataset("data/sample.csv");
      setData(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    const sorted = sortDataset(data, sortColumn, sortAsc);
    setData(sorted);
  }, [sortColumn, sortAsc]);

  const handleSort = (column: keyof DatasetRow) => {
    if (sortColumn === column) {
      setSortAsc(!sortAsc);
    } else {
      setSortColumn(column);
      setSortAsc(true);
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
          Dataset Explorer
        </Text>
        <Box flex="1" overflowY="auto">
          {data.length > 0 ? (
            <Table.Root variant="outline" size="sm">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('id')} cursor="pointer">
                    ID {sortColumn === 'id' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('name')} cursor="pointer">
                    Name {sortColumn === 'name' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('age')} cursor="pointer">
                  Age {sortColumn === 'age' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('email')} cursor="pointer">
                    Email {sortColumn === 'email' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((row) => (
                  <Table.Row key={row.id}>
                    <Table.Cell>{row.id}</Table.Cell>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.age}</Table.Cell>
                    <Table.Cell>{row.email}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          ) : (
            <Text>No data found in project.</Text>
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default DatasetExplorer;