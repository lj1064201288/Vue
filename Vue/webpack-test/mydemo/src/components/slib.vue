<template>
  <div class="container">
    我是子组件2
    <a href="javascript:" class="btn btn-success" @click="sub">提交数据</a>
  </div>
</template>

<script>
export default {
  name: "slib",
  data: function (){
    return {
        slib: "子组件2数据"
    }
  },
  props: ["getData"],
  methods: {
    sub: function (){
      this.getData(this.slib, {
        name: "李四",
        age: 24,
        sex: "男"
      });
      // this.$emit("getData", {
      //   data: {
      //     name: "张三",
      //     age: 18,
      //     sex: "男"
      //   },
      //   slib: this.silb,
      // });
    }
  }

}
</script>

<style scoped>

</style>
