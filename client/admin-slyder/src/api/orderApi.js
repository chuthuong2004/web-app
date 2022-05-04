import axiosClient from './axiosClient'

const ordersApi = {
    getAll: (params) => {
        const url = '/admin/orders/';
        return axiosClient.get(url, { params });
    },

    getProduct: (id, accessToken) => {
        const url = `/admin/order/${id}`
        console.log(id)
        return axiosClient.get(url, { headers: { 'token': `Bearer ${accessToken}` } })
    }
}

export default ordersApi;