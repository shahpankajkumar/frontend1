export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';

// Action Creators
export const fetchItems = () => ({ type: FETCH_ITEMS });
export const addItem = (data) => ({ type: ADD_ITEM, payload: data });
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
export const updateItem = (data) => ({ type: UPDATE_ITEM, payload: data });
