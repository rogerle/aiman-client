<template>
   
    <van-form @submit="onSubmit" class="loginStyle">
      <van-space direction="vertical" fill size="20px">
      <div class="loginTitle">AIMAN克隆人直播系统</div>
      <van-cell-group inset>
        <van-field v-model="username" name="username" label="用户名" placeholder="用户名" left-icon="manager"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="userPwd" type="password" name="userPwd" label="密码" placeholder="密码" left-icon="lock"
          :rules="[{ required: true, message: '请填写密码' }]"/>

      </van-cell-group>
      <div class="submitStyle">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
      </van-space>
    </van-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { login } from '../../api/user'
import { showSuccessToast, showFailToast,showLoadingToast } from 'vant';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const username = ref('')
const userPwd = ref('')
const store = useStore()
//跳转
const router = useRouter()

const onSubmit = async (values: any) => {
  showLoadingToast({
    message:'登录中....',
    forbidClick:true
  }
  )
  const res = await login(values)
  if (res.data.code === 0) {
    showSuccessToast("用户登录成功")
    store.commit("setUser",res.data)
    router.push('/')
  } else {
    showFailToast("用户登录失败")
  }
}

</script>

<style lang="scss">
.loginStyle{
  margin-top: 50%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 50%;
}
.submitStyle{
  margin-left: 20%;
  margin-right: 20%
}
.loginTitle{
  font-size: 18px;
  font-weight: bold;
  text-align: center;

}
</style>