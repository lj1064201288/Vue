<template>
  <div class="btn-group">
    <a href="javascript:" class="btn btn-success" @click="openApply">申请落户</a>

    <a href="javascript:" class="btn btn-warning" @click="openChange">落户地区修改</a>

  </div>

</template>

<script>
export default {
  name: "btn",
  props: ["openApply", "openChange"],
}
</script>

<style scoped>
.btn {
  margin-right: 30px;
  border-radius: 10px;
}
.btn-group {
  margin-bottom: 100px;
}
</style>
