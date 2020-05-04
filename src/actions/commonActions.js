import {CLEAR_CAPABILITY_CLOSE_MODAL, GET_ERRORS} from "./types";

export const clearErrors = () => ({
    type: GET_ERRORS,
    payload: {}
});

export const closeModalClearState = () => async dispatch => {
    dispatch({
        type: CLEAR_CAPABILITY_CLOSE_MODAL,
        payload: {}
    });
    dispatch(clearErrors());
};
