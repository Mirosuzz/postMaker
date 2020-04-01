import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga'
import {forbiddenWordsMiddleware} from './middlewares/forbiddenWordsMiddleware'
import {sagaWatcher} from './sagas/saga'


const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(sagaWatcher)

export default store;
