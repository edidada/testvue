<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MySelect data.items="[
      {id:11, name: '分类1'},
      {id:22, name: '分类2'},
      {id:33, name: '分类3'}
    ]"/>
  </div>
</template>

<script>
import MySelect from './components/MySelect.vue'

export default {
  name: 'App',
  components: {
    MySelect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
