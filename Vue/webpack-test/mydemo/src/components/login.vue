<template>
  <div>
    <p>现在是登录页面</p>
    账号： <input v-model="name">
    密码：<input v-model="password">
    <button @click=login>提交</button>
  </div>
</template>
<script>
export default {
  props:["time","check_login","roles"],
  data:function () {
    return {
      list:[
        {name:"admin",password:"admin",roles:["/list"]},
        {name:"root",password:"root",roles:["/son"]},
        {name:"a",password:"a",roles:true,},
      ],
      name:'',
      password:''
    }
  },
  methods:{
    login:function(){
      for(let i=0;i<this.list.length;i++){
          if(this.list[i]["name"]==this.name&&this.list[i]["password"]==this.password){
            console.log("登录成功")
            localStorage.setItem("token",JSON.stringify(this.list[i]))
            this.$router.push("/")
            return
          }
      }
      alert("账号或密码不正确")
    }
  },
  mounted:function(){
    console.log(this.$route.params,"home")
  }
}
</script>
