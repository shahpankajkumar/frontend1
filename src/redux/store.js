import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import itemReducer from '../redux/reducers/itemReducer';
import itemSaga from '../redux/sagas/itemSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    items: itemReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(itemSaga);

export default store;

