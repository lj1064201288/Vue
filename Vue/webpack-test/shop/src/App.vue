<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  /*background-image: url("assets/body.jpg");*/
  /*background-repeat: no-repeat;*/
  /*background-size: 100% 100%, cover;*/
}
.el-tree-node{
  color: #42b983;
}

.el-tree-node {
  padding: 15px;
  color: rgb(255, 255, 255);
  background-color: rgb(84, 92, 100)
}
.el-tree-node [class^=el-icon-] {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  color: #909399;
}
.el-tree-node__content:hover {
  background-color: rgb(84, 92, 100)
}
.el-tree-node:focus>.el-tree-node__content {
  background-color: rgb(84, 92, 100);
  color: #42b983;
}
.el-tree-node__content:hover {
  color: #149672;
}
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background-color: rgb(84, 92, 100);
  color: #149672;
}

.animated {
  -webkit-animation-duration: .5s;
  animation-duration: .5s; // 动画执行时间
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
