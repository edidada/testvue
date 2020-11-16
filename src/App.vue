<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <MySelect style="width:200px" data.items="[
      {id:11, name: '分类11'},
      {id:22, name: '分类22'},
      {id:33, name: '分类33'}
    ]"/>-->
    <div style="width:200px">
      <TestSelector></TestSelector>
    </div>
  </div>

</template>

<script>

// import MySelect from './components/MySelect.vue'
import TestSelector from './components/TestSelector.vue'

export default {
  name: 'App',
  components: {
    // MySelect
    // ,
    TestSelector
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
