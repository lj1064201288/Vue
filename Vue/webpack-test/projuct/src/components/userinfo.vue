<template>
  <div class="container">
<!--      userinfo-->
    <div class="table table-bordered">
      <tbody >
        <tr v-for="(item, index) in data" :key="index" :class="{'blue': !item.modify, 'red': item.modify}" @click="change(index)">
          <td class="col-sm-6">{{item.id}}</td>
          <td class="col-sm-6">{{item.name}}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data: () => {
    return {
     data:[
        {
          id:1,
          name:'i1',
          modify:false
        },
        {
          id:2,
          name:'i2',
          modify:false
        },
        {
          id:3,
          name:'i3',
          modify:false
        },
     ],

    }
  },
  methods: {
    change: function (index){
      let item = this.data.filter((item) => {
        if(item.modify == true){
          return item
        }
      })
      if (item.length > 0 && item[0].id != index+1){
        alert(`data第${item[0].id}个元素的modify为true,请修改后再操作`);
        return false;
      }
      this.data[index].modify = !this.data[index].modify;
    }
  },

}
</script>

<style scoped>
.blue {
  background: blue;
}
.red {
  background: red;
}

</style>
