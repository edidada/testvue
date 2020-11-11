
<template>
  <div class="hello">
    <select v-model="selectItem" @change="selectFn($event)">
      <!--选择项的value值默认选择项文本 可动态绑定选择项的value值 更改v-model指令绑定数据-->
      <option v-for="item in items" v-bind:key="item.id" :value="item.name">{{item.name}}</option>
    </select>
    <div>{{selectItem}}</div>    <!--选择项的value值-->
  </div>
</template>

<script>
import Vue from 'vue'
new Vue({
  el: '#hello',
  data: {
    selectItem: '分类1',
    items: [
      {id:11, name: '分类1'},
      {id:22, name: '分类2'},
      {id:33, name: '分类3'}
    ]
  },
  methods: {
    selectFn(e) {
      console.log(e)
      console.log(e.target.selectedIndex) // 选择项的index索引
      console.log(e.target.value) // 选择项的value
    }
  }
})
export default {
  name: 'MySelect',
  props: {
    items: [
      {id:11, name: '分类1'},
      {id:22, name: '分类2'},
      {id:33, name: '分类3'}
    ]
  }
}
</script>
