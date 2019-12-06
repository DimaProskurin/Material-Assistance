import cookie from "react-cookies";


export async function getCategoriesFromDB() {
    let response = await fetch('http://127.0.0.1:8000/api/categories/', {
        credentials: 'include',

    });
    let data = await response.json();
    return data.categories;
}

export async function getCompensations() {
    let response = await fetch('http://127.0.0.1:8000/api/compensations/', {
        credentials: 'include',

    });

    let data = await response.json();
    return data.compensations;
}

export function stringToArray(string) {
    if (string === "")
        return  [];
    return string.split('\n');
}

export function getToken() {
    console.log(document.cookie)
}

