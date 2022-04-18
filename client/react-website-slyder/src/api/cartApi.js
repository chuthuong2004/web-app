import axiosClient from "./axiosClient";

const cartApi = {
  getMyCart: (accessToken) => {
    const url = '/cart/my-cart'; // 
    return axiosClient.get(url, {headers: { // url: api, data: body, headers: headers, khi bị lỗi mấy này thử thêm cái body vô xem
      'token': `Bearer ${accessToken}`
    }});
  },  

  delete: (id,accessToken) => {
    const url = `/cart/remove-item-from-cart/${accessToken}`; // g t sẽ xóa cái item đầu tiên
    const data = {}
    console.log('delete cart ', accessToken);
    return axiosClient.put(url,data,{headers: { // url: api, data: body, headers: headers, khi bị lỗi mấy này thử thêm cái body vô xem
      'token': `Bearer ${accessToken}`
    }})
  } 
} 

export default cartApi; 