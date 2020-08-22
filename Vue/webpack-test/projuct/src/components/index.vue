<template>
  <div class="container">
    <h1>index</h1>
    <div class="nav">
      <router-link :to="{name: 'login', params:{url: 'login'}}" tag="button" class="btn btn-primary">全选反选</router-link>
      <router-link :to="{path: '/userinfo', query:{url: 'userinfo'}}" tag="button" class="btn btn-info">个人信息</router-link>
      <router-link :to="{path: '/swiper', params: {url: 'swiper'}}" class="btn btn-danger">轮播图</router-link>
      <router-link :to="{path: '/bubbling', params: {url: 'bubbling'}}" class="btn btn-danger">冒泡排序</router-link>
      <router-link :to="{path: '/intersection', params: {url: 'intersection'}}" class="btn btn-danger">交集差集</router-link>
      <router-link :to="{path: '/reduction', params: {url: 'reduction'}}" class="btn btn-danger">数据整理</router-link>
      <router-link :to="{path: '/tree', params: {url: 'tree'}}" class="btn btn-danger">树形导航</router-link>
      <hr />
      <div class="btn btn-primary" @click="process(arr)">扁平数组</div>
      <div class="btn btn-info" @click="show">查看处理过后的数组</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => {
    return {
      arr: [1,[[1,[2,89, [2,[123, 32, [21]]]],78,[[[[[[[[[[[222]]]]]]]]]]]],78,[45],[[[[[[[[[[[222]]]]]]]]]]]]],
      arr_process: [],
    }
  },
  methods:{
    process: function (arr){
        arr.forEach(item => {
        if (typeof item == 'object'){
          this.process(item)
        }else{
          this.arr_process.push(item);
        }
      })
    },
    show: function (){
      console.log(this.arr);
      console.log(this.arr_process);
    }
  }
}
</script>

<style scoped>

</style>
