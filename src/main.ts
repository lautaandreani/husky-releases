export async function getUser() {
    const user = await fetch ('https://api.github.com/users/LautaAndreani')
    const response = await user.json()

    return response
}