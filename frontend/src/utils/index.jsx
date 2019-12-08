import cookie from "react-cookies";


export async function getCategoriesFromDB() {
    let response = await fetch('http://127.0.0.1:8000/api/categories/', {
        credentials: 'include',

    });
    let data = await response.json();

    if ('categories' in data) {
        return data.categories;
    } else {
        return [];
    }
}

export async function getCompensations() {
    let response = await fetch('http://127.0.0.1:8000/api/compensations/', {
        credentials: 'include',

    });

    let data = await response.json();

    if ('compensations' in data) {
        return data.compensations;
    } else {
        return [];
    }
}

export function stringToArray(string) {
    if (string === "")
        return  [];
    return string.split('\n');
}

export function getToken() {
    console.log(document.cookie)
}

