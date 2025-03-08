import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Table,
  Text,
} from '@chakra-ui/react';
import { loadDataset, DatasetRow, sortDataset } from '../../lib/fileSystem';

const DatasetExplorer: React.FC = () => {
  // const { name: projectPath } = useSelector((state: RootState) => state.project);
  const projectPath = 'D:/SBIntelligency/works/thinkflow/myproject';
  const [data, setData] = useState<DatasetRow[]>([]);
  const [sortColumn, setSortColumn] = useState<keyof DatasetRow>('id');
  const [sortAsc, setSortAsc] = useState(true);

  // useEffect(() => {
  //   loadDataset(projectPath).then((result) => {
  //     const sorted = sortDataset(result, sortColumn, sortAsc);
  //     setData(sorted);
  //   });
  // }, [projectPath, sortColumn, sortAsc]);

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
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('value')} cursor="pointer">
                    Value {sortColumn === 'value' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                  <Table.ColumnHeader bg={{ base: 'gray.200', _dark: 'gray.600' }} onClick={() => handleSort('category')} cursor="pointer">
                    Category {sortColumn === 'category' && (sortAsc ? '↑' : '↓')}
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((row) => (
                  <Table.Row key={row.id}>
                    <Table.Cell>{row.id}</Table.Cell>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.value}</Table.Cell>
                    <Table.Cell>{row.category}</Table.Cell>
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