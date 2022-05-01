import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    getProduct: (id, accessToken) => {
        const url = '/product/' + id
        return axiosClient.get(url, { headers: { 'token': `Bearer ${accessToken}` } })
    }
}

export default productApi; 