import React from 'react';
import { Table, Button, Space } from 'antd';

const TableComponent = ({ items = [], onEdit, onDelete }) => {
  if (!Array.isArray(items)) {
    console.error("Expected items to be an array but got:", items);
    return null;
  }

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Phone', dataIndex: 'phone' },
    {
      title: 'Actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => onEdit(record)}>Edit</Button>
          <Button danger type="link" onClick={() => onDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={items} rowKey="id" columns={columns} pagination={false} />;
};

export default TableComponent;
