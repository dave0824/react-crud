/**
 * 路由注册
 */
import ajax from './ajax'

export const register = user => ajax('/register',user,'POST')
export const login = user => ajax('/login',user,'POST')
export const getUserList = (page,pageSize) => ajax('/user/list',{page:page,pageSize:pageSize})