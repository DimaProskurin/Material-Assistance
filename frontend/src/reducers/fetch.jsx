import {FETCH_CATEGORIES, FETCH_COMPENSATIONS} from "../actions";

const initialState = {
    categories: [],
    compensations: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                categories: action.payload,
                compensations: state.compensations,
            };

        case FETCH_COMPENSATIONS:
            return {
                categories: state.categories,
                compensations: action.payload
            };

        default:
            return state;
    }
}