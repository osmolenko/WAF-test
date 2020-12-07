import {ADD_HOTDOG, DEL_HOTDOG, GET_HOTDOG, GET_SINGLE_HOTDOG, UPDATE_HOTDOG} from "../constants/actionTypes";

const initialState = {
    hotdogs: [],
    hotdog: {}
}

function hotdogReducer(state = initialState, action) {
    switch(action.type){
        case ADD_HOTDOG:
            return Object.assign({}, state, {
                hotdogs: state.hotdogs.concat(action.payload)
            });

        case GET_HOTDOG:
            return Object.assign({}, state, {
                hotdogs: state.hotdogs.concat(action.payload)
            });

        case GET_SINGLE_HOTDOG:
            const idx = state.hotdogs.indexOf(state.hotdogs.find(hotdog => hotdog.id === action.payload))
            const single = state.hotdogs[idx]
            return {
                ...state,
                hotdog: single
            }

        case DEL_HOTDOG:
            const del = state.hotdogs
            del.splice(del.indexOf(del.find(hotdog => hotdog.id === action.payload.id)), 1)
            return {
                ...state,
                hotdogs: del
            }

        case UPDATE_HOTDOG:
            const upd = state.hotdogs
            upd.splice(upd.indexOf(upd.find(hotdog => hotdog.id === action.payload.id)), 1)
            upd.push(action.payload)
            return {
                ...state,
                hotdogs: upd
            }
        default:
            return state;
    }
};

export default hotdogReducer;
