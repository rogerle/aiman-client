//获取直播间的信息
import request from '../utils/request'

export const getRoomList = getRooms

function getRooms(room_id: number) {
    let base_root = '/rooms/'
    let geturl = base_root.concat(String(room_id))
    let rooms = request({
        method: 'GET',
        url: geturl
    })
    return rooms
}