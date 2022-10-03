import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStoreGenerator(initialState: any): EnhancedStore {
    var store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
        preloadedState: initialState
    });
    sagaMiddleware.run(rootSaga);

    return store;
};
