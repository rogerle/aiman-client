<template>
    <div>
        <Router-view>
        </Router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="video-o" to="/">直播间</van-tabbar-item>
            <van-tabbar-item icon="service-o" to="/talker">小旺</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script lang="ts" setup>
    import { RouterView } from 'vue-router'
    import { ref } from 'vue'
    const active = ref(0)

</script>

<style lang="scss">
    
</style>