<template>
  <div class="container">
    <btn v-if="btn" :openApply="openApply" :openChange="openChange"></btn>
    <fill v-if="fill" :getData="getData" :obj="obj" ref="fill"></fill>
    <actCode v-if="actCode" :code="code"></actCode>
    <apply v-if="apply" :ver="ver"></apply>
  </div>
</template>

<script>
import btn from "./btn"
import fill from "./fill"
import apply from "./apply"
import actCode from "./act-code"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      btn:　true,
      fill: false,
      apply: false,
      code: '',
      actCode: false,
      userInfo: [],
      actList: [],
      obj: {},
    }
  },
  components: {btn, fill, apply, actCode},
  methods:{
    getData: function (data){
      this.userInfo.push(data);
      this.fill = false;
      this.code = data.phone;
      this.actList.push(data.phone);
      this.actCode = true;
      alert('申请成功!!!');
    },
    openApply: function (){
      this.fill = true;
      this.apply = false;
      this.actCode = false;
      if (this.$refs['fill']){
        this.$refs['fill'].username = "";
        this.$refs['fill'].card = "";
        this.$refs['fill'].validity = "";
        this.$refs['fill'].district = "请选择";
        this.$refs['fill'].phone = "";
        this.$refs['fill'].citys = "";
        this.$refs['fill'].company = "";
        this.$refs['fill'].linkman = "";
        this.$refs['fill'].area = "";
        this.$refs['fill'].re = "请选择";
        this.$refs['fill'].prove = "";
        this.$refs['fill'].cardVer = "";
        this.$refs['fill'].phoneVer = "";
      }


    },
    openChange: function (){
      this.apply = true;
      this.fill = false;
      this.actCode = false;

    },
    ver: function (value){

      if (value){
        let index = this.actList.indexOf(value);
        if (index < 0){
          alert("申请码不正确");
          return false;
        }else{
          this.obj = this.userInfo.filter(item => {
            if (item.phone == value) {
              return item
            }
          })
          if (this.obj){
            this.fill = true;
            this.apply = false;
            this.actCode = false;
          }
        }
      }else {
        alert("申请码不能为空！！！")
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
