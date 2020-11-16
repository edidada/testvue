<template>
  <Select v-model="model1" style="width:200px" @on-change="getItemValue" >
    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import iView from 'iview'    //引入ivew库
import 'iview/dist/styles/iview.css'    // 使用 CSS
import Vue from 'vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(iView)
export default {
  name: "TestSelector",
  data () {
    return {
      cityList: [
        {
          value: 1,
          label: 'New York'
        },
        {
          value: 2,
          label: 'London'
        },
        {
          value: 3,
          label: 'Sydney'
        }
      ],
      model1: ''
    }
  },
  methods: {
    getItemValue(e) {
      console.log(e);
    //     axios({method: 'get',url:`http://${window.dasConfig.ip}:${window.dasConfig.port}/${window.dasConfig.jobMetaApi}/GetAllJob`
    // }).then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

      // axios.post('http://${window.dasConfig.ip}:${window.dasConfig.port}/${window.dasConfig.jobMetaApi}/user', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });


//       var url = this.GLOBAL.BASE_URL+'/router'  //此处+后面的router是端口后面拼接的地址，接口不一样url不一样
//       this.$ajax.get(url,{
// //此处是get请求的配置，如请求头中需要的token等
//       }).then(res=>{
//         alert('请求成功!')
//         window.location.href='http://www.baidu.com'     //请求成功之后跳转到新页面  （这里书写请求成功的操作）
//       }).catch(error=>{
//         alert('请求失败') //书写请求失败之后的操作内容
//         console.log(error)
//       })

      // var formData=new FormData();
      // formData.append('user',123456);
      // formData.append('pass',12345678);
      //
      // // 请求后端数据,查询元数据
      //   axios({
      //     method: 'post',
      //     url: `http://${window.dasConfig.ip}:${window.dasConfig.port}/${window.dasConfig.jobMetaApi}/GetAllJob`
      //   }).post("/notice",formData)
      //       .then(response => {
      //         console.log(response);
      //       })
      //       .catch(error => {
      //         console.log(error);
      //       });

      axios.post(`http://${window.dasConfig.ip}:${window.dasConfig.port}/${window.dasConfig.jobMetaApi}/t-stu/testWarpper`,
          {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
      )
          .then((response)=> {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
  }
}
</script>

<style scoped>

</style>