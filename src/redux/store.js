import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer'; // Import the root reducer
import rootSaga from './sagas/rootSaga'; // Import the root saga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, // Use the combined root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga); // Run the root saga

export default store;