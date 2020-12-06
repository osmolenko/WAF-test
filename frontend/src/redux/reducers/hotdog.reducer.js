import {ADD_HOTDOG, DEL_HOTDOG, GET_HOTDOG, UPDATE_HOTDOG} from "../constants/actionTypes";

const initialState = {
    hotdogs: []
}

function hotdogReducer(state = initialState, action) {
    switch(action.type){
        case ADD_HOTDOG:
            console.log('REDUCER')
            console.log(action.payload)
            console.log('REDUCER')

            return Object.assign({}, state, {
                hotdogs: state.hotdogs.concat(action.payload)
            });

        case GET_HOTDOG:
            return Object.assign({}, state, {
                hotdogs: state.hotdogs.concat(action.payload)
            });

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




    }
    return state;
};

export default hotdogReducer;
