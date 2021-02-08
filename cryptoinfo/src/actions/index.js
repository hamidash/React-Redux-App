import axios from "axios";
export const FETCH_GLOBAL_INFO_START = "FETCH_GLOBAL_INFO_START";
export const FETCH_GLOBAL_INFO_SUCCESS = "FETCH_GLOBAL_INFO_SUCCESS";
export const FETCH_GLOBAL_INFO_FAIL = "FETCH_GLOBAL_INFO_FAIL";




export const getGlobalInfo = () => (dispatch) => {
    dispatch({type: FETCH_GLOBAL_INFO_START})

    axios.get('https://api.coinlore.net/api/global/')
    .then(res => dispatch({type: FETCH_GLOBAL_INFO_SUCCESS, payload: res.data}))
    .catch (err => dispatch({type: FETCH_GLOBAL_INFO_FAIL, payload: err.message}))
}