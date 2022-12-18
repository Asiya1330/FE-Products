import * as api from "../api";
import * as actiontypes from "../Actions/actionTypes";

export const getQueryProducts = (queryParamName) => async (dispatch) => {
    try {
        dispatch({type:actiontypes.RESET_ERROR_MESSAGE,payload: null})
        const nameParam = queryParamName || null;
        const { data } = await api.getQueryProducts(nameParam);
        console.log(nameParam,data);
        dispatch({ type: actiontypes.FETCH_QUERY_PRODUCTS, payload: data })
    }    
    catch (e) {
        console.log(e);
        dispatch({type:actiontypes.ERROR_OCCURED, payload: e})
    }
}
export const purchaseProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: actiontypes.RESET_ERROR_MESSAGE, payload: null })
        await api.purchaseProduct(product);
        dispatch({type:actiontypes.PURCHASE_PRODUCT, payload: product})
        dispatch({ type: actiontypes.SUCCESS, payload: 'succesfully purchased' })
        await new Promise(resolve => { setTimeout(() => { resolve() }, 3000) })
        dispatch({ type: actiontypes.RESET_SUCCESS_MESSAGE, payload: null })
    }    
    catch (e) {
        console.log(e);
        dispatch({ type: actiontypes.ERROR_OCCURED, payload: e })

    }
}




