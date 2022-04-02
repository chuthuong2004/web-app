import axiosClient from "./axiosClient";

const catalogApi = {
  getAll: (params) => {
    const url = '/catalog';
    return axiosClient.get(url, { params });
  },
}

export default catalogApi; 