<template>
  <Select v-model="model1" style="width:200px">
    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>

<script>
import iView from 'iview'    //引入ivew库
import 'iview/dist/styles/iview.css'    // 使用 CSS
import Vue from 'vue'

Vue.config.productionTip = false
Vue.use(iView)
export default {
  name: "TestSelector",
  data () {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      model1: ''
    }
  }
}
</script>

<style scoped>

</style>