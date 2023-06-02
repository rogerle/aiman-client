<template>
    <div class="loginform">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
              <van-field
                v-model="username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="userPwd"
                type="password"
                name="userPwd"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
              />
            </van-cell-group>
            <div style="margin: 16px;">
              <van-button round block type="primary" native-type="submit">
                提交
              </van-button>
            </div>
          </van-form>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
    div{
        width: 428;
        height: 673;
        .loginform{
            background-color: red;
            vertical-align: middle;
        }
    }
</style>