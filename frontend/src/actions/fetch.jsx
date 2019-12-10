export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMPENSATIONS = 'FETCH_COMPENSATIONS';
export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_STUDENT_DATA = 'FETCH_STUDENT_DATA';
export const FETCH_STUDENT_HISTORY = 'FETCH_STUDENT_HISTORY';

export function fetchCategories(categories) {
    return {
        type: FETCH_CATEGORIES,
        payload: categories
    }
}

export function fetchCompensations(compensations) {
    return {
        type: FETCH_COMPENSATIONS,
        payload: compensations
    }
}

export function fetchAuth(isAuth) {
    return {
        type: FETCH_AUTH,
        payload: isAuth
    }
}

export function fetchStudentData(data) {
    return {
        type: FETCH_STUDENT_DATA,
        payload: data
    }
}

export function fetchStudentHistory(history) {
    return {
        type: FETCH_STUDENT_HISTORY,
        payload: history
    }
}
