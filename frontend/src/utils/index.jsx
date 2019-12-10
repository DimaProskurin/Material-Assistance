import cookie from "react-cookies";


export async function getCategoriesFromDB() {
    let response = await fetch('http://127.0.0.1:8000/api/categories/', {
        credentials: 'include',

    });
    let data = await response.json();

    try {
        if ('categories' in data) {
            return data.categories;
        }
    } catch (e) {
        return data;
    }
}

export async function getCompensations() {
    let response = await fetch('http://127.0.0.1:8000/api/compensations/', {
        credentials: 'include',

    });

    let data = await response.json();

    try {
        if ('compensations' in data) {
            return data.compensations;
        }
    } catch (e) {
        return data;
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

export async function getStudentData() {
    let response = await fetch('http://127.0.0.1:8000/api/student/', {
        credentials: 'include',

    });

    let data = await response.json();

    try {
        if ('student' in data) {
            return data.student;
        }
    } catch (e) {
        return data;
    }
}

export async function getStudentHistory() {
    let response = await fetch('http://127.0.0.1:8000/api/history/', {
        credentials: 'include',

    });

    let data = await response.json();

    try {
        if ('payments' in data) {
            return data.payments;
        }
    } catch (e) {
        return data;
    }
}

