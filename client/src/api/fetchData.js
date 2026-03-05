const URL = "http://localhost:8000/api/movies"

export async function fetchData() {
    const response = await fetch(URL)
    return await response.json()
}
