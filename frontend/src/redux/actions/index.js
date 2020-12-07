import {
    ADD_HOTDOG,
    CHECK_HOTDOG, DEL_HOTDOG,
    GET_HOTDOG, GET_SINGLE_HOTDOG,
    HIDE_MODAL,
    SHOW_MODAL,
    TAB_CLICKED,
    TOGGLE_MODAL, UPDATE_HOTDOG
} from "../constants/actionTypes";
import urlEncode from "../../common/urlEncode";

export function getData() {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/get', {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_HOTDOG, payload: json });
            });
    }
};

export function addHotdog(payload) {
    console.log('ACTION')
    console.log(payload)
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/create', urlEncode('POST', payload))
            .then(response => response.json())
            .then(json => {dispatch({ type: ADD_HOTDOG, payload: json });})
            .then(json => console.log(json));

    }
};

export function updateHotdog(payload) {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/update', urlEncode('POST', payload))
            .then(response => response.json())
            .then(json => {
                dispatch({ type: UPDATE_HOTDOG, payload: json });
            });
    }
};

export function delHotdog(payload) {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/delete', urlEncode('DELETE', payload))
            .then(dispatch({type: DEL_HOTDOG, payload: payload}))
            .then(response => console.log(response))
            .then(response => console.log(payload))
    }
};

export function openModal (modalParams) {
    return {
        type: SHOW_MODAL,
        ...modalParams
    };
}
export function closeModal() {
    return {
        type: HIDE_MODAL
    };
}

export function getSingleHotdog(id) {
    return {
        type: GET_SINGLE_HOTDOG,
        payload: id
    };
}
