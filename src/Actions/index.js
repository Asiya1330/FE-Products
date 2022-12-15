import * as actionTypes from './actionTypes'
import * as api from '../api'


export const purchaseProduct = (product) => async (dispatch) => {
    try {
        dispatch(
            {
                type: actionTypes.RESET_ERROR_MESSAGE,
                payload: ''
            }
        )
        const { data } = await api.purchaseProduct(product);
        dispatch(
            {
                type: actionTypes.PURCHASE_PRODUCT,
                payload: data
            }
        )
        dispatch({
            type: actionTypes.SUCCESS,
            payload: 'Successfully purchases'
        })
    }
    catch (e) {
        dispatch({
            type: actionTypes.ERROR_OCCURED,
            payload: e
        })
    }
}



export const getQueryProducts = (nameParam) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.RESET_ERROR_MESSAGE,
            payload: ''
        })
        dispatch({
            type: actionTypes.SUCCESS,
            payload: null
        })
        const { data } = await api.getQueryProducts(nameParam);
        dispatch(
            {
                type: actionTypes.FETCH_QUERY_PRODUCTS,
                payload: data
            }
        )

    }
    catch (e) {
        dispatch({
            type: actionTypes.ERROR_OCCURED,
            payload: e
        })
    }
}