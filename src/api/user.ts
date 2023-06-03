//封装用户登录信息
import request from '../utils/request'

export const login = (data: any) => {
    return request({
        method: 'POST',
        url:'/user/login',
        data
    })
}
