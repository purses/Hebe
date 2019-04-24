<template lang='pug'>
    #app
        el-button(@click='handleBtnClick') hello world!
</template>

<script>
  export default {
      name: 'app',
      components: {
      },
      methods: {
          handleBtnClick () {
              alert('hello world');
          }
      }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
