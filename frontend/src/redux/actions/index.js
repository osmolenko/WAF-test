import {
    ADD_HOTDOG,
    DEL_HOTDOG,
    GET_HOTDOG,
    GET_SINGLE_HOTDOG,
    HIDE_MODAL,
    SHOW_MODAL,
    UPDATE_HOTDOG
} from "../constants/actionTypes";
import urlEncode from "../../common/urlEncode";

//GET запрос к API на получение всех хот-догов
export function getData() {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/get', {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_HOTDOG, payload: json});
            });
    }
};

//POST запрос к API на добавление хот-дога
export function addHotdog(payload) {
    console.log('ACTION')
    console.log(payload)
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/create', urlEncode('POST', payload))
            .then(response => response.json())
            .then(json => {dispatch({ type: ADD_HOTDOG, payload: json });})

    }
};

//POST запрос к API на изменение хот-дога
export function updateHotdog(payload) {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/update', urlEncode('POST', payload))
            .then(response => response.json())
            .then(json => {
                dispatch({type: UPDATE_HOTDOG, payload: json});
            });
    }
};

//DELETE запрос к API на удаление хот-дога
export function delHotdog(payload) {
    return function(dispatch){
        return fetch('http://localhost:3000/hotdog/delete', urlEncode('DELETE', payload))
            .then(dispatch({type: DEL_HOTDOG, payload: payload}))
    }
};

//Открытие модального окна
export function openModal(modalParams) {
    return {
        type: SHOW_MODAL,
        ...modalParams
    };
}

//Закрытие модального окна
export function closeModal() {
    return {
        type: HIDE_MODAL
    };
}

//Получение одного хотдога
export function getSingleHotdog(id) {
    return {
        type: GET_SINGLE_HOTDOG,
        payload: id
    };
}
