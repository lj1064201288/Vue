<template>
  <div class="code">
    您的申请码是:
    <br />
    <b>{{code}}</b>
  </div>
</template>

<script>
export default {
  name: "act-code",
  data: function (){
    return {

    }
  },
  props: ["code"]
}
</script>

<style scoped>
.code {
  margin-top: 40px;
}
</style>
