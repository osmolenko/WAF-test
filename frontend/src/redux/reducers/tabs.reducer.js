import {TAB_CLICKED} from "../constants/actionTypes";

const initialState = {
    activeTab: 1
}

export const tabsReducer = (state = initialState, action) => {
    switch (action.type){

        case TAB_CLICKED:
            return{
                ...state,
                activeTab: action.activeTab
            }

        default:
            return state;

    }
}
