import requests from "./request";
import mockRequest from "./mockRequest";
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

export const reqGetBannerList = () => mockRequest.get('/banner');
export const reqGetFloorList = () => mockRequest.get('/floor');

export const reqGetSearchInfo = (params = {}) => requests({ url: '/list', method: 'post', data: params });

export const reqGoodsInfo = (productId) => requests({ url: `/item/${productId}`, method: 'get' });

export const reqUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });

export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
export const reqGetCodeMock = () => mockRequest.get('/user');

export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });

export const reqLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });