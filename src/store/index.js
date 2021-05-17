import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(
  {
    key: 'boilerplate', // Muda de acordo com projeto
    storage,
    whitelist: ['auth'],
  },
  reducers
);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
