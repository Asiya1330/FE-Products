import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const purchaseProduct = (product) => axios.post(`${baseUrl}/api/purchase`, product)

export const getQueryProducts = (name) => axios.get(`${baseUrl}/product`, {
    params: {
        name: name,
    }
})

