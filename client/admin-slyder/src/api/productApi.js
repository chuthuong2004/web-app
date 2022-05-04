import axiosJWT from "axios";

const productApi = {
    getAll: (params) => {
        const url = 'https://web-api-chuthuong.herokuapp.com/api/v1/admin/products';
        return axiosJWT.get(url, { params });
    },

    getProduct: (id, accessToken) => {
        const url = `https://web-api-chuthuong.herokuapp.com/api/v1/admin/products+${id}`
        return axiosJWT.get(url, { headers: { 'token': `Bearer ${accessToken}` } })
    }
}

export default productApi; 