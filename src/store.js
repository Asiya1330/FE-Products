import {
    applyMiddleware,
    legacy_createStore as createStore,
    compose
} from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;