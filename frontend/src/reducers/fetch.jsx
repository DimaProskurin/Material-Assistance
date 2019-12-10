import {FETCH_CATEGORIES, FETCH_COMPENSATIONS, FETCH_AUTH, FETCH_STUDENT_DATA, FETCH_STUDENT_HISTORY} from "../actions";

const initialState = {
    categories: [],
    compensations: [],
    authed: false,
    studentData: {},
    studentHistory: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMPENSATIONS:
            return {
                categories: state.categories,
                compensations: action.payload,
                authed: state.authed,
                studentData: state.studentData,
                studentHistory: state.studentHistory
            };

        case FETCH_CATEGORIES:
            return {
                categories: action.payload,
                compensations: state.compensations,
                authed: state.authed,
                studentData: state.studentData,
                studentHistory: state.studentHistory
            };

        case FETCH_AUTH:
            return {
                categories: state.categories,
                compensations: state.compensations,
                authed: action.payload,
                studentData: state.studentData,
                studentHistory: state.studentHistory
            };

        case FETCH_STUDENT_DATA:
            return {
                categories: state.categories,
                compensations: state.compensations,
                authed: state.authed,
                studentData: action.payload,
                studentHistory: state.studentHistory
            };

        case FETCH_STUDENT_HISTORY:
            return {
                categories: state.categories,
                compensations: state.compensations,
                authed: state.authed,
                studentData: state.studentData,
                studentHistory: action.payload
            };

        default:
            return state;
    }
}
