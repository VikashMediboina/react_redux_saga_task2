import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
import rootsaga from './sagaAction'
const saga=createSagaMiddleware();
const store=    createStore(reducer,applyMiddleware(saga))
saga.run(rootsaga)


export default store