export async function getCategoriesFromDB() {
    let response = await fetch('http://127.0.0.1:8000/api/categories/');
    let data = await response.json();
    return data.categories;
}