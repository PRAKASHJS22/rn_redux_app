import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootreducer from '../reducer/index'
import counter from '../reducer/CounterReducer';



const Store=createStore(rootreducer,applyMiddleware(thunk,logger))


export default Store;