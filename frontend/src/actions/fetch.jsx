export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_COMPENSATIONS = 'FETCH_COMPENSATIONS';

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