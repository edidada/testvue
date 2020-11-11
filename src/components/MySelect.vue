
<template>
  <div class="myselectorclass">
    <select v-model="selectItem" @change="selectFn($event)">
      <!--选择项的value值默认选择项文本 可动态绑定选择项的value值 更改v-model指令绑定数据-->
      <option v-for="item in items" v-bind:key="item.id" :value="item.name">{{item.name}}</option>
    </select>
    <div>{{selectItem}}</div>    <!--选择项的value值-->

    <div>
      <Select @on-change="getItemValue" v-model="formSend.code">
        <Option :value="item.code" v-for="item in dataList" v-bind:key="item.id">{{item.name}}</Option>
      </Select>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
new Vue({
  el: '#myselectorclass',
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
  data:(){
    return{
    items: [
      {id:11, name: '分类1'},
      {id:22, name: '分类2'},
      {id:33, name: '分类3'}
    ]}
  }
}
</script>
