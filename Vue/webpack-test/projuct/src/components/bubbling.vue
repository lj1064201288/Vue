<template>
  <div class="container">
    <hr />

    <div class="red">原始数据:{{data}}</div>
    <hr>
    <a href="javascript:" class="btn btn-success" @click="sort">整理数据</a>
    <div class="green">排序过后的数据:{{sortData}}</div>
  </div>
</template>

<script>
export default {
  name: "bubbling",
  data: ()=>{
    return {
      data: [
        {children:[{id:1}]},
        {children:[{id:5}]},
        {children:[{id:4}]},
        {children:[{id:11}]},
        {children:[{id:7}]},
        {children:[]},
      ],
      sortData: [],

    }
  },
  methods: {
    sort: function (){

      for (let i=0; i<this.data.length-1; i++){

        for (let j=i+1; j<this.data.length; j++){
          if (this.data[j].children.length < 1){
            let item = this.data[j];
            let index = this.data.indexOf(item);
            this.data.splice(index, 1);
            this.data.unshift(item);
            break;
          }
          if (this.data[i].children[0].id > this.data[j].children[0].id){
            let tmp = this.data[i];
            this.data[i] = this.data[j];
            this.data[j] = tmp;
          }
        }
      }
      this.sortData = this.data;
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.red {
  color: red;
}
.green {
  color: #42b983;
}
</style>
