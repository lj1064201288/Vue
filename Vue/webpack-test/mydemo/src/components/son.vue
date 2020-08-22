<template>
  <div class="container">
    我是组件
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{newObj.name}}</td>
          <td>{{newObj.age}}</td>
          <td>{{newObj.sex}}</td>
        </tr>
      </tbody>

    </table>
    <a href="javascript:" @click="show" class="btn btn-primary">获取数据</a>
  </div>
</template>

<script>
export default {
  name: "son",
  props: ["obj","name"],
  data: function (){
    return {
      newObj: {},
      // name: '',
      age: '',
      sex: "",
    }
  },

  methods: {
      show(e){
        this.newObj = this.obj
        console.log(this.newObj);
      }
  },
  mounted:function(){
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>
