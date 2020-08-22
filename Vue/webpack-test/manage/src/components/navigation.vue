<template>
  <div class="container-fluid">
    <div class="nav col-sm-1">
      <div class="list-group">
        <div class="list-group-item">
          <router-link :to="{name: 'show', query:{url: 'show',id: 1 }}">管理页面数据</router-link>
        </div>
        <div class="list-group-item">
          <router-link :to="{name: 'show', query:{url: 'show', id: 2}}">管理页面布局</router-link>
        </div>
        <div class="list-group-item">
          <router-link :to="{name: 'show',  query:{url: 'show', id: 3}}">管理用户数据</router-link>
        </div>
        <div class="list-group-item">
          <router-link :to="{name: 'show',  query:{url: 'show', id: 4}}">管理后台数据</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data: () => {
      return {
        user: {},
        ispri: true,
        notPri: false,
      }
  },
  methods: {

  },
  mounted() {
    if (sessionStorage.getItem("user")){
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background: #2c3e50;
  padding: 100px 20px;
  margin: 0;
}
.red {
  color: red;
}

</style>
