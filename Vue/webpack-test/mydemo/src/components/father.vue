<template>
  <div>
    <div v-if="login_state">欢迎某某某</div>
    <div v-else>点击登录</div>
    <router-link :to="{name:'homes',params:{url:'home'}}" active-class="cur">home</router-link>
    <router-link :to="{path:'/list',query:{url:'list'}}" active-class="cur" >list</router-link>
    <router-link :to="{path:'/son',query:{url:'list'}}" active-class="cur" >son</router-link>
<!--    <button @click="jump('home')">home</button>-->
<!--    <button @click="jump('list')">list</button>-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      login_state:'',
    }
  },
  methods:{
    jump(url){
      this.$router.push({
        path:url,
        query:{
          url:url
        }
      })
    }
  },
  mounted(){
    this.login_state=localStorage.getItem("token")
  }
}
</script>
<style>
.cur{
  color:red
}
</style>
