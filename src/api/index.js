import requests from "./request";
import mockRequest from "./mockRequest";
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

export const reqGetBannerList = () => mockRequest.get('/banner');
export const reqGetFloorList = () => mockRequest.get('/floor');