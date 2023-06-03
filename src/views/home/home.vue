<template>
    <div>
        <van-nav-bar title="直播间管理">
            <template #right>
                <van-icon name="search" size="18" color="gray" @click="onClick"/>
            </template>
        </van-nav-bar>
        <form action="/">
            <van-search
              v-model="value"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="onCancel"
              class="topSearch"
            />
          </form>
    </div>
    <!--没有内容时加载的-->
    <div class="noData">
        <van-empty description="没有内容"/>
    </div>
    <!--有内容时加载的列表-->
</template>

<script lang="ts" setup>
    import { showToast } from 'vant';
import {ref} from 'vue'
    const value = ref('')
    function onSearch(value:string){
        showToast(value)
    }

    function onCancel(){
        showToast('取消')
    }

    function onClick() {
        console.log('search')
    }
</script>

<style lang="scss">
    .noData{
        margin-top: 30%;
    }
    .topSearch{
        margin-left: 10px;
        margin-right: 10px;
    }
</style>