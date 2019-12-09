import {FETCH_CATEGORIES, FETCH_COMPENSATIONS, FETCH_AUTH} from "../actions";

const initialState = {
    categories: [],
    compensations: [],
    authed: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPENSATIONS:
            return {
                categories: state.categories,
                compensations: action.payload
            };

        case FETCH_CATEGORIES:
            return {
                categories: action.payload,
                compensations: state.compensations
            };

        case FETCH_AUTH:
            return {
                categories: state.categories,
                compensations: state.compensations,
                authed: action.payload
            };

        default:
            return state;
    }
}
