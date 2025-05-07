import { takeLatest, put, call } from 'redux-saga/effects';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
} from '../actions/itemActions';

import * as api from '../../services/api';

function* fetchItemsSaga() {
  try {
    const response = yield call(api.fetchItems);
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ITEMS_FAILURE, payload: error.message });
    console.error('Fetch failed', error);
  }
}

function* addItemSaga(action) {
  try {
    const response = yield call(api.addItem, action.payload);
    yield put({ type: ADD_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_ITEM_FAILURE, payload: error.message });
    console.error('Add failed', error);
  }
}

function* deleteItemSaga(action) {
  try {
    yield call(api.deleteItem, action.payload);
    yield put({ type: DELETE_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_ITEM_FAILURE, payload: error.message });
    console.error('Delete failed', error);
  }
}

function* updateItemSaga(action) {
  try {
    const response = yield call(api.updateItem, action.payload);
    yield put({ type: UPDATE_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_ITEM_FAILURE, payload: error.message });
    console.error('Update failed', error);
  }
}

export default function* itemSaga() {
  yield takeLatest(FETCH_ITEMS_REQUEST, fetchItemsSaga);
  yield takeLatest(ADD_ITEM_REQUEST, addItemSaga);
  yield takeLatest(DELETE_ITEM_REQUEST, deleteItemSaga);
  yield takeLatest(UPDATE_ITEM_REQUEST, updateItemSaga);
}
