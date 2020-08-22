<template>
    <div class="container">
<!--      <div class="form-group form-inline">-->
<!--        <label for="username">用户名: </label>-->
<!--        <input type="text" placeholder="请输入用户名" name="username" id="username" class="form-control" v-model="username">-->
<!--      </div>-->
<!--      <div class="form-group form-inline">-->
<!--        <label for="pw">密码: </label>-->
<!--        <input type="password" placeholder="请输入密码" name="pw" id="pw" class="form-control" v-model="password">-->
<!--      </div>-->
<!--      <a href="javascript:" class="btn btn-success" @click="login">登录</a>-->
      <div class="input-group">
        <label for="all">
          <input type="checkbox" v-model="all" @click="cancel" id="all"> 全选
        </label>
      </div>

      <hr />
      <div class="input-group">
        <label for="list1">
          <input type="checkbox" v-model="sel1" id="list1"> 列表一
        </label>

      </div>
      <div class="input-group">
        <label for="list2">
          <input type="checkbox"  v-model="sel2" id="list2"> 列表二
        </label>

      </div>
      <div class="input-group">
        <label for="list3">
          <input type="checkbox"  v-model="sel3" id="list3"> 列表三
        </label>
      </div>
      <div class="input-group">
        <label for="list4">
          <input type="checkbox"  v-model="sel4" id="list4"> 列表四
        </label>
      </div>
      <div class="input-group">
        <label for="list5">
          <input type="checkbox"  v-model="sel5" id="list5"> 列表五
        </label>
      </div>

    </div>
</template>

<script>
export default {
  name: "login",
  data: function(){
    return {
      username: "",
      password: "",
      obj: {
        user: "lj1064201288",
        pw: "123456"
      },
      all: false,
      selectItem: ["sel1", "sel2", "sel3", "sel4", "sel5", "sel6",],
      sel1: false,
      sel2: false,
      sel3: false,
      sel4: false,
      sel5: false,

    }
  },
  watch: {
    all(value, old){
      if (value == true) {
        this.selectItem.forEach(item => {
          this[item] = true
        })
      }
    },
    sel1(value, old){
      if (value == false){
        this.all = false;
      }else {
        if  (value==true && this.sel2 == true &&
            this.sel3 == true && this.sel4 == true && this.sel5 == true
        ){
          this.all = true
        }
      }
    },
    sel2(value, old){
      if (value == false){
        this.all = false;
      }else {
        if  (value==true && this.sel1 == true &&
          this.sel3 == true && this.sel4 == true && this.sel5 == true
        ){
          this.all = true
        }
      }
    },
    sel3(value, old){
      if (value == false){
        this.all = false;
      }else {
        if  (value==true && this.sel2 == true &&
          this.sel1 == true && this.sel4 == true && this.sel5 == true
        ){
          this.all = true
        }
      }
    },
    sel4(value, old){
      if (value == false){
        this.all = false;
      }else {
        if  (value==true && this.sel2 == true &&
          this.sel3 == true && this.sel1 == true && this.sel5 == true
        ){
          this.all = true
        }
      }
    },
    sel5(value, old){
      if (value == false){
        this.all = false;
      }else {
        if  (value==true && this.sel2 == true &&
          this.sel3 == true && this.sel4 == true && this.sel1 == true
        ){
          this.all = true
        }
      }
    },
  },
  methods: {
    login: function (){
        if (this.username && this.password){
            if(this.username == this.obj.user){
              if (this.password == this.obj.pw){
                console.log("登录成功!!!");
                localStorage.setItem("loginState", true);
                this.$router.push("/index");
              }else {
                console.log("密码错误");
              }
            }else {
              console.log('账号不存在');
            }
        }
    },
    cancel: function (){
      this.selectItem.forEach(item => {
        this[item] = false;
      })
    }
  },
}
</script>

<style scoped>

</style>
