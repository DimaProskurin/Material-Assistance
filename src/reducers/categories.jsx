import {FETCH_CATEGORIES} from "../actions";

const initialState = {
    categories: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                categories: action.payload
            }
    }

    return state;
}