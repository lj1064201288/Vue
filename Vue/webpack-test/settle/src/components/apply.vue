<template>
  <div class="apply">
    <div class="form-group form-inline">
      <input type="text" class="form-control" placeholder="请输入申请码" v-model="code">
    </div>
    <div class="btn-group">
      <a href="javascript:" class="btn btn-success" @click="verify">验证</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply",
  data: function (){
    return {
      code: ""
    }
  },
  props:['ver'],
  methods: {
    verify: function (){
      this.ver(this.code);
    }
  }
}
</script>

<style scoped>

</style>
