<template>
  <div class="container">
    <div class="panel panel-primary">

      <div class="panel panel-heading">
          <slib :getData="getData"></slib>
      </div>
      <div class="panel panel-body">
        <son :obj="obj"></son>
      </div>
    </div>

  </div>

</template>

<script>
import son from "@/components/son"
import slib from "@/components/slib"


export default {
  name: "subject",
  components: {son, slib},
  data: function (){
    return {
      obj: {
        "name": "张三",
        "age": 18,
        "sex": "男",
      },
      name: "asd"
    }
  },
  methods: {
    getData(a, b){
        console.log(a);
        this.obj = b;
    }
  }
}
</script>

<style scoped>

</style>
