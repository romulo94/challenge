import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// verifica se o ambiente é de desenvolvimetno
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
