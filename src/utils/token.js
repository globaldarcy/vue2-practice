// 存放工具函数
import { v4 as uuidv4 } from 'uuid';
uuidv4();
export const getToken = () => {
    let token = localStorage.getItem('u_token');
    if (!token) {
        token = uuidv4();
        localStorage.setItem('u_token', token);
    }
    return token;
    // return "da17e8cf-7d7e-4fb4-8fd1-f54b1e89cca1";
}