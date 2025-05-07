import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_ITEMS, FETCH_ITEMS_SUCCESS,
  ADD_ITEM, ADD_ITEM_SUCCESS,
  DELETE_ITEM, DELETE_ITEM_SUCCESS,
  UPDATE_ITEM, UPDATE_ITEM_SUCCESS
} from '../actions/itemActions';

import * as api from '../../services/api';

function* fetchItemsSaga() {
  try {
    const response = yield call(api.fetchItems);
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Fetch failed', error);
  }
}

function* addItemSaga(action) {
  try {
    const response = yield call(api.addItem, action.payload);
    yield put({ type: ADD_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Add failed', error);
  }
}

function* deleteItemSaga(action) {
  try {
    yield call(api.deleteItem, action.payload);
    yield put({ type: DELETE_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    console.error('Delete failed', error);
  }
}

function* updateItemSaga(action) {
  try {
    const response = yield call(api.updateItem, action.payload);
    yield put({ type: UPDATE_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Update failed', error);
  }
}

export default function* itemSaga() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(DELETE_ITEM, deleteItemSaga);
  yield takeLatest(UPDATE_ITEM, updateItemSaga);
}
