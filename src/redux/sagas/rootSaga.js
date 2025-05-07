import { all } from 'redux-saga/effects';
import itemSaga from './itemSagas';

export default function* rootSaga() {
  yield all([
    itemSaga(), // Add your sagas here
  ]);
}