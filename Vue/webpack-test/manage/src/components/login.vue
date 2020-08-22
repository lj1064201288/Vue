<template>
<div class="main">
    <div class="login form-horizontal">
      <h4>登录管理系统</h4>
      <div class="form-group form-inline">
        <label for="username" class="control-label col-sm-4">用户名: </label>
        <input type="text" placeholder="请输入用户名" name="username" id="username" class="form-control col-sm-6" v-model="username">
      </div>
      <div class="form-group form-inline">
        <label for="pw" class="control-label col-sm-4">密码: </label>
        <input type="password" placeholder="请输入密码" name="pw" id="pw" class="form-control col-sm-6" v-model="password">
      </div>
      <div class="form-group form-inline">
        <input type="checkbox" @click="savaPwd" ref="sava"> 记住密码
      </div>
      <a href="javascript:" class="btn btn-success" @click="login">登录</a>
    </div>
</div>
</template>

<script>
export default {
  name: "login",
  data: ()=>{
    return {
      username: "",
      password: "",
      userinfo: [
        {
          username: "lj1064201288",
          password: "123456",
          author: 0
        },
        {
          username: "admin",
          password: "123456",
          author: 1
        }
      ]
    }
  },
  methods: {
    login: function (){
        let user = this.userinfo.filter(item => {
          if (item.username == this.username){
            return item
          }
        });
        if (user.length > 0){
            user = user[0];
            if (this.password == user.password){
              console.log("登录成功!!");
              sessionStorage.setItem("user", JSON.stringify(user));
              this.$router.push('/index');
            }else {
              alert("密码错误")
            }
        }else {
          alert("没有此帐户")
        }
    },
    savaPwd: function (){
      if (this.$refs.sava.checked){
        localStorage.setItem("isSave", true);
      }else {
        localStorage.setItem("isSave", false);
      }
    }
  },
  mounted() {
    if (localStorage.getItem("isSave") == 'true'){
      this.username = this.userinfo[0].username;
      this.password = this.userinfo[0].password
    }
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/bg.jpg");
  background-size: 100% 100%, cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  width: 400px;
}
h4 {
  line-height: 40px;
}
</style>
