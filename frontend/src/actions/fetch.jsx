export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMPENSATIONS = 'FETCH_COMPENSATIONS';
export const FETCH_AUTH = 'FETCH_AUTH';

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