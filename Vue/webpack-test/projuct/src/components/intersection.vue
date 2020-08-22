<template>
  <div class="container">
    <hr />
    <div>第一个数组: {{arr1}}</div>
    <div>第二个数组: {{arr2}}</div>
    <div class="btn-group">
      <a href="javascript:" class="btn btn-info" @click="section">查看交集</a>
      <a href="javascript:" class="btn btn-warning" @click="diff">查看差集</a>
      <a href="javascript:" class="btn btn-primary" @click="setter(arr1)">数组去重1</a>
      <a href="javascript:" class="btn btn-primary" @click="setter(arr2)">数组去重2</a>
    </div>
    <div>新的数组: {{newArr}}</div>
  </div>
</template>

<script>
export default {
  name: "intersection",
  data: ()=>{
    return {
      arr1: [1, 2, 3, 52, 23, 21, 22, 1, 43, 23],
      arr2: [6, 5, 61, 2, 3, 5, 66, 12, 12, 23, 45],
      newArr: [],
    }
  },
  methods: {
    section: function (){
      this.newArr = [];
      for (let i=0; i<this.arr1.length; i++){
        for (let j=0; j<this.arr2.length; j++){
          if (this.arr1[i] == this.arr2[j]){
            this.newArr.push(this.arr1[i]);
            this.setter(this.newArr);
          }
        }
      }
    },
    diff: function (){
      this.newArr = [];
      this.newArr = this.arr1.concat(this.arr2).filter(item => {
        return !this.arr1.includes(item) || !this.arr2.includes(item)
      });
      this.setter(this.newArr);
    },
    setter: function (arr){
      this.newArr = [];
      let obj = {}
      for (let i=0; i<arr.length; i++){
          if (!obj[arr[i]]){
            this.newArr.push(arr[i]);
            obj[arr[i]] = 1;
          }
      }
    }
  }
}
</script>

<style scoped>
.btn-group {
  margin-top: 50px;
}
</style>
