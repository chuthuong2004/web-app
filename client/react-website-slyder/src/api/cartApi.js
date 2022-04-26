import axiosClient from "./axiosClient";

const cartApi = {
  getAll: (accessToken) => {
    const url = `/carts`
    return axiosClient.get(url, {headers: {'token' : `Bearer ${accessToken}`}}) 
  },

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
  },

  updateQuantity: (id, quantity, accessToken) => {
    const url = `/cart/${id}`
    console.log('quantity car: ', accessToken)
  return axiosClient.put(url, {quantity}, {headers: {'token': `Bearer ${accessToken}`}})
  },

  addItem: (id, quantity, color, size, accessToken) => {
    const cartItem = {
      product: id,
      quantity: quantity,
      color: color,
      size: size
  }
    const url =`/cart/add-to-cart` // để t cái test add cart sp này, xem nha
    console.log(cartItem) // lúc nảy m truyền cái này {cartItem} nên k ăn, bởi vì cartItem đã là 1 obj, ok
    return axiosClient.post(url, cartItem, {headers: {'token': `Bearer ${accessToken }`}})
  }
} 

export default cartApi; 