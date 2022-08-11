import sendRequest from './send-request';
const BASE_URL = '/api/profile';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createProfile(profileData) {
    console.log(profileData)
    return sendRequest(`${BASE_URL}/new`, 'POST', profileData)
}

export function createLikes(likedPerson) {
    console.log("likedPerson", likedPerson)
    return sendRequest(`${BASE_URL}/like`, 'POST', likedPerson)
}