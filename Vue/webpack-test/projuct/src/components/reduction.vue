<template>
  <div class="container">
    <hr />
    <div>原始数据: {{old}}</div>
    <hr />
    <a href="javascript:" class="btn btn-success" @click="reduct(old)">整理后的数据</a>
    <div>新的数据:{{newData}}</div>
  </div>
</template>

<script>
export default {
  name: "reduction",
  data: () => {
    return {
      old: [
        {id: 1, label: "一级1", parend_id: 0},
        {id: 2, label: "一级2", parend_id: 0},
        {id: 3, label: "二级1-1", parend_id: 1},
        {id: 4, label: "二级2-1", parend_id: 2},
        {id: 5, label: "二级2-1", parend_id: 2},
        {id: 6, label: "三级1-1-1", parend_id: 3},
        {id: 7, label: "三级1-1-2", parend_id: 3},
        {id: 8, label: "二级1-2", parend_id: 1},
        {id: 9, label: "二级2-2", parend_id: 5},
      ],
      newData: []
    }
  },
  methods: {
    reduct: function (arr){
      for (let i=0; i<arr.length; i++){
        if (arr[i].parend_id == 0){
          let item = arr[i]
          delete item.parend_id;
          this.newData.push(item);
        }
      }
      for (let i=0; i<this.newData.length; i++){
        this.newData[i].children = []
        for (let j=0; j<arr.length; j++){
          if (arr[j].parend_id ==  this.newData[i].id){
            let item = arr[j];
            delete item.parend_id;
            this.newData[i].children.push(item);
          }
        }
      }
      this.newData[0].children[0].children = [];
      for (let i=0; i<arr.length; i++){
        if (arr[i].parend_id == 3){
          let item = arr[i];
          delete item.parend_id;
          this.newData[0].children[0].children.push(item);
        }
      }
    },
    make_child(id){
      let arr=[]
      for(let i=0;i<this.old.length;i++){
        if(this.old[i]["parend_id"]==id){
          let child=[]
          child=this.make_child(this.old[i]["id"])
          this.old[i].child=child
          arr.push(this.old[i])
        }
      }
      return arr
    }
  },
  mounted(){
    let back=this.make_child(0)
    console.log(back)
  }
}
</script>

<style scoped>

</style>
