//封装本地数据序列化存储

export function setItem (key:string,value:any) {
    if(typeof value === 'object'){
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value);
}

//获取本地存储的数据

export function getItem(key:string) {
    const data = window.localStorage.getItem(key)
    return data
}

//删除本地存储的数据
export function removeItem(key:string) {
    window.localStorage.removeItem(key)
}