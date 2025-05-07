import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from '../../redux/actions/itemActions';
import { Button, Modal } from 'antd';
import FormComponent from '../FormComponent';
import TableComponent from '../TableComponent';

const Dashboard = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null = add mode

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setEditingItem(null);
    setIsModalVisible(false);
  };

  const handleFormSubmit = (values) => {
    if (editingItem) {
      dispatch(updateItem({ ...editingItem, ...values }));
    } else {
      dispatch(addItem(values));
    }
    handleCloseModal();
  };

  return (
    <div style={{ padding: 20 }}>
      <Button type="primary" onClick={() => handleOpenModal()}>Add Item</Button>
      <br/>
      <br/>
      <TableComponent
        items={items}
        onEdit={handleOpenModal}
        onDelete={(id) => dispatch(deleteItem(id))}
      />

      <Modal
        title={editingItem ? "Edit Item" : "Add Item"}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        destroyOnClose
      >
        <FormComponent
          initialValues={editingItem}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
