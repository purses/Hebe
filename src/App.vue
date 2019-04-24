<template lang='pug'>
    #app
        .content-wrapper(v-loading='loading.page')
            el-row.page-header(v-if='!noHeader')
                el-col(:span='24')
                    h3 后台管理系统
            template(v-else)
                router-view
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                loading: {
                    page: true,
                }
            }
        },
        computed: {
            noHeader () {
                return _.get(this.$route, 'meta.noHeader', false);
            },
            noLogin () {
                return _.get(this.$route, 'meta.noLogin', false);
            },
        },
        mounted () {
            this.init();
        },
        components: {
        },
        methods: {
            init () {
                if (this.noLogin) {
                    this.loading.page = false;
                    return;
                }
            },
            handleBtnClick () {
                alert('hello world');
            }
        }
    }
</script>
<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
}
</style>
<style lang="sass" scoped>
    .content-wrapper
        padding: 30px
        height: 100%
        .page-header
            padding: 0 30px
            margin: -30px
            height: 56px
            line-height: 56px
            font-size: 20px
            color: #fff
            background-color: #495a80
</style>

