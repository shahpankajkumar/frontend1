import axios from 'axios';

const API_URL = 'http://localhost:5000/items';

export const fetchItems = () => axios.get(API_URL);
export const addItem = (item) => axios.post(API_URL, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
export const updateItem = (item) => axios.put(`${API_URL}/${item.id}`, item);
