<template>
  <el-row class="tac" style="height: 100%">
    <el-col :span="3" style="height: 100%">
      <h2>
        <i class="el-icon-platform-eleme"></i>
        商品管理后台
      </h2>

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        style="height: 100%"
        unique-opened
        active-text-color="#ffd04b">
        <el-menu-item index="0">
          <template slot-scope="scope">
            <el-input
              placeholder="请输入搜索内容"
              prefix-icon="el-icon-search"
              v-model="filterText"
            >
            </el-input>
          </template>
        </el-menu-item>
      <el-tree
        class="filter-tree"
        :data="meuns"
        accordion
        highlight-current
        :props="defaultProps"
        auto-expand-parent
        node-key="id"
        :default-checked-keys="[4]"
        :default-expanded-keys="[1]"
        :render-content="renderContent"
        :filter-node-method="filterNode"
        ref="tree">
      </el-tree>
      </el-menu>

    </el-col>
    <el-col :span="21">
      <div class="nav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            {{meun}}
          </el-breadcrumb-item>
          <div class="login-out">
            <span class="usernick">您好!&nbsp; {{user.usernick}} </span>
            <template>
              <el-button type="danger" @click="loginOut" size="small">退出登录</el-button>
            </template>
          </div>
        </el-breadcrumb>
      </div>
      <transition
        mode="out-in"
        name="custom-classes-transition"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
      >
        <router-view ref="child"></router-view>
      </transition>

    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "admin",
  data: () => {
    return {
      user: {},
      meun: "用户管理",
      meuns: [
        {
          id: 1,
          label: '系统管理',
          icon: "el-icon-s-tools",
          children: [
            {
              id: 4,
              label: '用户管理',
              path: "/manage",
              icon: "el-icon-user-solid",
            },
            {
              id: 9,
              label: '角色管理',
              path: "/role",
              icon: "el-icon-user",
            }
          ]
        }, {
          id: 2,
          label: '系统监控',
          icon: "el-icon-s-marketing",
          children: [{
            id: 5,
            label: '在线用户',
            icon: "el-icon-magic-stick",
          }, {
            id: 6,
            label: '定时任务',
            icon: "el-icon-time",
          },{
            id: 7,
            label: '数据监控',
            icon: "el-icon-loading",
          },

          ]
        }, {
          id: 3,
          label: '设置',
          icon: "el-icon-setting",
      }],
      filterText: '',

      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    renderContent(h, { node, data, store }) {
      if (data.path){
        return (
          <router-link to={data.path} tag="span">
            <span class="custom-tree-node">
              <i class={data.icon}></i>
              {node.label}
            </span>
          </router-link>

        );
      }else {
        return (
          <span class="custom-tree-node">
            <i class={data.icon}></i>
            <span>{node.label}</span>
          </span>);
    }

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut: function (){
      this.$confirm("是否确认要退出登录?", "提示", {
        confirmButtonText: '确定退出',
        cancelButtonText: '取消',
      }).then(()=> {
        this.$message({
          message: "退出成功!!!"
        })
        localStorage.setItem("loginStatus", '')
        localStorage.setItem("user", '')
        this.$router.push('/login');
      }).catch(()=> {
        this.$message({
          message: "取消退出"
        })
      })
    },

  },

  created() {

  },
  watch: {
    $route(to, from){
      if (to.path == "/manage"){
        this.meun = "用户管理"
      }else if(to.path == "/role"){
        this.meun = "角色管理"
      }
    },
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  mounted() {
    let user = localStorage.getItem('user');
    if (user){
      this.user = JSON.parse(user);
    }
    var _this = this
    // function  again(){
    //   if (_this.$route.path == "/login"){
    //     return false;
    //   }else {
    //     if (document.hidden === true){
    //       setTimeout(function (){
    //         _this.$alert("登录已超时，请重新登录", "提示", {
    //           confirmButtonText: "重新登录",
    //           callback: action => {
    //             _this.$router.push('/login');
    //           }
    //         })
    //         document.removeEventListener("visibilitychange", again, false);
    //       }, 180000)
    //     }
    //   }
    // }
    // document.addEventListener("visibilitychange", again);

  }
}

</script>

<style scoped>
h2 {
  background: #42b983;
  color: #eeeeee;
  margin: 0;
  padding: 20px 0;
}
.nav {
  background-image: linear-gradient(to left, #42b983 , #dddddd);
  padding: 20px 30px;
}
.login-out {
  text-align: right;
}
.main {
  padding: 28px 30px;
}
.usernick {
  margin-right: 30px;
}
.filter-tree {
  background: rgb(84, 92, 100);
  color: #ffffff;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: .5s
}
.v-leave {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: .5s;
}

</style>
