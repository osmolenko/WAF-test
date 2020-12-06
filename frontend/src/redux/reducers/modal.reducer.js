import {HIDE_MODAL, SHOW_MODAL} from "../constants/actionTypes";

const initialState = {
    modalType: null,
    modalProps: {}
}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: action.modalProps
            };

        case HIDE_MODAL:
            return initialState;

        default:
            return state;
    }
}
