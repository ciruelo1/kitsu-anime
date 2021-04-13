import Axios from 'axios';

const baseApi = Axios.create({
    baseURL: 'https://kitsu.io/api/edge',
});

export const Api = {
    getCharacters: () => {
        return baseApi({
            method: 'GET',
            url: '/anime'
        })
    }
}