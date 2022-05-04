import axiosClient from "./axiosClient";

const orderApi = {


  orderNew: (data, accessToken) => {
    const url = '/order/new/'
    return axiosClient.post(url, data, {headers: {'token': `Bearer ${accessToken}`}})
  }
}

export default orderApi; 