<template>
  <div class="hello">
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="panel panel-primary">-->
<!--          <div class="panel panel-heading">-->
<!--            添加品牌-->
<!--          </div>-->
<!--          <div class="panel panel-body">-->
<!--            <label for="uid" class="control-label">ID:</label>-->
<!--            <input type="text" name="uid" id="uid" class="form-control" v-model="id">-->
<!--            <label for="name" class="control-label">Name:</label>-->
<!--            <input type="text" name="name" id="name" class="form-control" v-model="name">-->
<!--          </div>-->
<!--          <div class="panel panel-footer">-->
<!--            <input type="button" class="btn btn-primary" value="添加" @click="add">-->
<!--          </div>-->
<!--        </div>-->
<!--        <label class="control-label">搜索关键字:</label>-->
<!--        <input type="text" class="form-control" v-model="key">-->
<!--        <table class=" table table-bordered table-hover table-striped">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>Id</th>-->
<!--            <th>Name</th>-->
<!--            <th>Ctime</th>-->
<!--            <th>Opteration</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="item in search()" :key="item.id">-->
<!--            <td>{{item.id}}</td>-->
<!--            <td>{{item.name}}</td>-->
<!--            <td>{{item.ctime}}</td>-->
<!--            <td><a href="#" @click.prevent="del(item.id)">删除</a></td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->
<!--    </div>-->
<!--    {{msg}}-->
<!--    <input  v-model="msgs"/>-->
<!--    <div class="list">-->
<!--      <div class="list-item" v-for="(item, index) in comm" :key="index" >-->
<!--        {{item.name}}-->
<!--        <input type="text" v-model="obj.name" />-->
<!--      </div>-->
<!--      {{comm}}-->
<!--    </div>-->
<!--    <button @click="changes()">输出msg</button>-->
<!--    <button @click="changess()">改变msg</button>-->

<!--    <home :time=time ref="home" :check_login=check_login ></home>-->
<!--    <button @click="getHome">获得home标签</button>-->
<!--    <list ref="list" :time=time></list>-->
    你没有权限
    <button @click="change">点一下</button>
    <component :is="com"></component>
  </div>
</template>

<script>
// import home from "./home.vue"
import home from '@/components/home'
import list from '@/components/list'

export default {
  name: 'HelloWorld',
  components: {home, list},
  data () {
    return {
      id: '12',
      com:"list",
      time: new Date(),
      name: '张三',
      pw: '123',
      msg: '',
      coms: [
        {
          id: 12,
          name: '耐克',
          ctime: new Date()
        },
        {
          id: 24,
          name: '阿迪达斯',
          ctime: new Date()
        },
        {
          id: 25,
          name: "贵人鸟",
          ctime: new Date()
        },
      ],
      obj: {
        "name": "asdsa",
        "age":  "24"
      },
      key: ''
    }
  },
  watch:{
    msg(value,old){
      console.log(value, old);
    },
    coms(value,old){
      console.log(value, old);
    },
    obj(value, old){
      console.log(value, old);
    }
  },
  computed:{
    msgs:{
      //getters
      get:function(){
        return this.msg;
      },
      //setters
      set:function(value){
        this.msg=parseInt(value)+1
      }
    },
    comm: {
      get: function(){
        return this.coms;
      },
      set: function(value){
        console.log(this.coms.name, value)

      }
    }
  },
  methods: {
    // change: function(index){
    //   this.$set(this.arr, index, "12312");
    //   // console.log(this.arr[index])
    // },
    // clicks:function(){

    // },
    check_login:function({name,pw}){

      if(name==this.name){

        if(pw==this.pw){
          console.log("登录成功")
        }else{
          console.log("密码不正确")
        }
      }else{
        console.log("账号不正确")
      }
    },
    getHome(){
      console.log(this.$refs["list"])
    },
    changes(){console.log(this.msgs)},
    change:function(){
      this.com="home"
    },
    changess(){this.msgs=9527},
    add: function(){
      var item = {
        id: this.id,
        name: this.name,
        ctime: new Date()
      }
      if (this.id && this.name != ''){
        this.coms.unshift(item)
      }

    },
    search(){
//				return this.coms
      return this.coms.filter((item)=>{
        if (item.name.includes(this.key)){
          return item
        }
      })
    },
    del: function(id){
      // 查找到所要删除的元素下标
      var idx = this.coms.findIndex(function(item){
        return item.id == id
      })
      // 删除该元素
      this.coms.splice(idx, 1)
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
