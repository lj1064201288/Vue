<template>
  <div class="container col-sm-10">
    <h1>有权限查看</h1>
  </div>
</template>

<script>
export default {
  name: "show",
  data: function (){
    return {
      ispri: true,
    }
  },
  mounted() {
    console.log(this.$route.query, "id");
  },
}
</script>

<style scoped>
.container {
  background: #eeeeee;
}

</style>
