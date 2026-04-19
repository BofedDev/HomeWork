const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`)
    return response.json()
}

export const getUserById = async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    return response.json()
}

export const createUser = async (userData) => {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
    })
    return response.json()
}

export const updateUser = async (id, userData) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
    })
    return response.json()
}

export const deleteUser = async (id) => {
    await fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' })
}