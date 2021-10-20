import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootreducer from '../reducer';
import reducer from '../reducer/CounterReducer';

const store=createStore(reducer,applyMiddleware(thunk,logger))


export default store;