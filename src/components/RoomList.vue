<template>

    <div v-if="hasData">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
    </div>
    <!--没有内容时加载的-->
    <div v-else class="noData">
        <van-empty description="没有内容" />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
const props = defineProps(['room_name'])
const list = ref([0])
const loading = ref(false)
const finished = ref(false)
const hasData = ref(false)

function onLoad() {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 
    setTimeout(() => {
        
        for (let i = 0; i < 10; i++) {
            list.value.push(list.value[i] + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);
    
}
</script>

<style lang="scss">
.noData {
    margin-top: 30%;
}
</style>