import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import allReducers from '../Reducers';
import thunk from 'redux-thunk';

const store = createStore(allReducers, compose(applyMiddleware(thunk)))

export default store;