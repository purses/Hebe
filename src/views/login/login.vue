<template lang='pug'>
    .login-wrapper
        el-form.login-form(ref='form' :model='form')
            el-form-item
                el-input(
                    placeholder='请输入用户名'
                    prefix-icon='el-icon-service'
                    v-model='form.username')
            el-form-item
                el-input(
                    type='password'
                    placeholder='请输入密码'
                    prefix-icon="el-icon-search"
                    v-model='form.password')
            el-form-item
                el-button(type='primary' @click='handleLoginClick') 登录
                el-button 取消

</template>

<script>
    export default {
        data () {
            return {
                loading: {
                    page: true,
                },
                form: {
                    username: '',
                    password: '',
                },
            };
        },
        methods: {
            handleLoginClick () {
                console.log('login');
            }
        }
    }
</script>
<style lang="sass" scoped>
    .login-wrapper
        position: relative
        width: 100%
        height: 100%
        .login-form
            border: 1px solid #f1f1f1
            border-radius: 8px
            position: absolute
            top: 40%
            left: 50%
            padding: 20px
            width: 300px
            height: 200px
            margin-top: -100px
            margin-left: -150px
</style>

