<template>
<div class="container-fluid">
  <hr />
  <div class="list-group">
    <div class="list-group-item">
      <div v-for="(item, index) in old" :key="index" class="list-group-item" v-if="index < idx">
        {{item}}
      </div>
      <div class="list-group-item">
        <a href="javascript:" class="btn btn-success" @click="two">展开第二层</a>
      </div>
      <div class="list-group-item">
        <a href="javascript:" class="btn btn-success" @click="three">展开第三层</a>
      </div>
      <div class="list-group-item">
        <a href="javascript:" class="btn btn-success" @click="four">展开第四层</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "tree",
  data: ()=>{
    return {
      old: [1, 2, 3, '1-1', '1-2', '2-1', '2-2', '3-1', '3-2'],
      idx: 3
    }
  },
  methods: {
    two: function (){
      if (this.idx >= 5){
        this.idx = 3
      } else {
        this.idx = 5;
      }
    },
    three: function (){
      if (this.idx >= 7){
        this.idx = 5
      } else {
        this.idx = 7;
      }
    },
    four: function (){
      if (this.idx >= 9){
        this.idx = 7
      } else {
        this.idx = 9;
      }
    }
  }
}
</script>

<style scoped>

</style>
