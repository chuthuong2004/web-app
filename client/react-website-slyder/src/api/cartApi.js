import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: (params) => {
    const url = '/carts';
    return axiosClient.get(url, { params });
  },
}

export default categoryApi; 