<template>
  <div class="container">
      <div class="login">
        <h2>管理员登录</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
            prop="username"
            label="用户名"
          >
            <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            @keyup.enter.native="login('ruleForm')"
          >
            <el-input v-model="ruleForm.password" autocomplete="off" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isMeber">记住密码</el-checkbox>
          </el-form-item>
          <div class="btn-item">
            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    // 检测账号是否存在或者正确
    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        this.isTrue = this.userinfo.filter(item => {
          return item.username == value;
        })
        if (this.isTrue.length >= 1){
          callback();
        }else {
          callback(new Error("账号不存在"));
        }
      }
    };
    // 判断密码是否正确
    var password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value !== this.isTrue[0].password) {
        callback(new Error('密码不正确!'));
      } else {
        callback();
      }
    };
    return {
      // 存储账号密码判断
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ],
      },
      userinfo: [
        {
          id: 1,
          username: "admin",
          password: '123456',
          usernick: "你中意的名字",
          department: "研发",
          phone: "15888888888",
          status: "1",
          createTime:  "2020-8-18 17:17:13",
          rules: ['/manage', '/role']
        },
        {
          id: 2,
          username: "liujin",
          password: '123456',
          usernick: "我不玩游戏",
          department: "运维",
          phone: "15877777777",
          status: "1",
          createTime: "2020-8-18 17:18:07",
          rules: ['/manage']
        },
        {
          id: 3,
          username: "liujun",
          password: '123456',
          usernick: "我还是不玩游戏",
          department: "技术",
          phone: "15866666666",
          status: "1",
          createTime: "2020-8-18 17:20:07",
          rules: ['/role']
        },
        {
          id: 4,
          username: "admin1",
          password: '123456',
          usernick: "你中意的名字1",
          department: "研发",
          phone: "15888888888",
          status: "1",
          createTime: "2020-8-18 17:17:13",
          rules: ['/manage', '/role']
        },
        {
          id: 5,
          username: "liujin1",
          password: '123456',
          usernick: "我不玩游戏1",
          department: "运维",
          phone: "15877777777",
          status: "1",
          createTime: "2020-8-18 17:18:07",
          rules: ['/manage']
        },
        {
          id: 6,
          username: "liujun1",
          password: '123456',
          usernick: "我还是不玩游戏1",
          department: "技术",
          phone: "15866666666",
          status: "1",
          createTime: "2020-8-18 17:20:07",
          rules: ['/role']
        },
        {
          id: 7,
          username: "admin2",
          password: '123456',
          usernick: "你中意的名字2",
          department: "研发",
          phone: "15888888888",
          status: "1",
          createTime: "2020-8-18 17:17:13",
          rules: ['/manage', '/role']
        },
        {
          id: 8,
          username: "liujin2",
          password: '123456',
          usernick: "我不玩游戏2",
          department: "运维",
          phone: "15877777777",
          status: "1",
          createTime: "2020-8-18 17:18:07",
          rules: ['/manage']
        },
        {
          id: 9,
          username: "liujun2",
          password: '123456',
          usernick: "我还是不玩游戏2",
          department: "技术",
          phone: "15866666666",
          status: "1",
          createTime: "2020-8-18 17:20:07",
          rules: ['/role']
        },
        {
          id: 10,
          username: "admin3",
          password: '123456',
          usernick: "你中意的名字3",
          department: "研发",
          phone: "15888888888",
          status: "1",
          createTime: "2020-8-18 17:17:13",
          rules: ['/manage', '/role']
        },
        {
          id: 11,
          username: "liujin3",
          password: '123456',
          usernick: "我不玩游戏3",
          department: "运维",
          phone: "15877777777",
          status: "1",
          createTime: "2020-8-18 17:18:07",
          rules: ['/manage']
        },
        {
          id: 12,
          username: "liujun3",
          password: '123456',
          usernick: "我还是不玩游戏3",
          department: "技术",
          phone: "15866666666",
          status: "1",
          createTime: "2020-8-18 17:20:07",
          rules: ['/role']
        },
        {
          id: 13,
          username: "admin4",
          password: '123456',
          usernick: "你中意的名字4",
          department: "研发",
          phone: "15888888888",
          status: "1",
          createTime: "2020-8-18 17:17:13",
          rules: ['/manage', '/role']
        },
        {
          id: 14,
          username: "liujin4",
          password: '123456',
          usernick: "我不玩游戏4",
          department: "运维",
          phone: "15877777777",
          status: "1",
          createTime: "2020-8-18 17:18:07",
          rules: ['/manage']
        },
        {
          id: 15,
          username: "liujun4",
          password: '123456',
          usernick: "我还是不玩游戏4",
          department: "技术",
          phone: "15866666666",
          status: "1",
          createTime: "2020-8-18 17:20:07",
          rules: ['/role']
        },
      ],
      isTrue: [],
      isMeber: false,
    };
  },
  methods: {
    login: function (formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isMeber){
            localStorage.setItem("user", JSON.stringify(this.isTrue[0]))
            localStorage.setItem('loginStatus', JSON.stringify(this.ruleForm))
          }else {
            localStorage.setItem("user", JSON.stringify(this.isTrue[0]))
          }
          this.$router.push("/manage")
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    localStorage.setItem("userinfo", JSON.stringify(this.userinfo));
    if (localStorage.getItem("loginStatus")){
      let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
      if (loginStatus){
        this.ruleForm.username = loginStatus.username
        this.ruleForm.password = loginStatus.password
        this.isMeber = true
      }
    }
  },

}
</script>

<style scoped>
.container {
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
  width: 300px;
  background: #eeeeee;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  padding-left: 0;
}
.demo-ruleForm {
  text-align: left;
}
button {
  width: 100%;
}
.btn-item {
  padding-left: 40px;
}
</style>
