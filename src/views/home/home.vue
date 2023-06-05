<template>
    <div>
        <van-nav-bar title="直播间管理">
            <template #right>
                <van-icon name="search" size="18" color="gray" @click="showSearch"/>
            </template>
        </van-nav-bar>
        <form v-show="isShow" action="/">
            <van-search
              v-model="value"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="showSearch"
              class="topSearch"
            />
          </form>
    </div>
    <RoomList/>
</template>

<script lang="ts" setup>
    import { showToast } from 'vant';
    import {ref,onMounted} from 'vue'
    import {getRoomList} from '../../api/room'
    import RoomList  from '../../components/RoomList.vue'

    const value = ref('')
    const isShow = ref(false)
    const list = ref([])
    const roomList = list
    const loading = ref(false) 
    const finished = ref(false)

    function showSearch(){
        isShow.value=!isShow.value
        return isShow
    }

    function onSearch(value:string){
        showToast(value)
    }

    

    function loadRooms(room_id:number){
        let res = getRoomList(room_id)
        
    }

    function onLoad(){
   
    }
</script>

<style lang="scss">

    .topSearch{
        margin-left: 10px;
        margin-right: 10px;
    }
</style>