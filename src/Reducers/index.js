import * as actionTypes from '../Actions/actionTypes'
import { combineReducers } from 'redux'


const products = (products = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUERY_PRODUCTS:
      return action.payload;
    default:
      return products;
  }
}

const purchases = (purchases = [], action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_PRODUCT:
      return [...purchases, action.payload];
    default:
      return purchases;
      break;
  }
}

const errorMessage = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET_ERROR_MESSAGE':
      return null;
    case 'ERROR_OCCURED':
      return state = payload;
    default:
      return state;
      break;
  }
}

const succesMessage = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SUCCESS':
      return payload;
    default:
      return state;
      break;
  }
}


const allReducers = combineReducers({
  purchase: purchases,
  error: errorMessage,
  success: succesMessage,
  products: products
})

export default allReducers

