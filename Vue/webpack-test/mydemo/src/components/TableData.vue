<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <caption>年龄的总数: <input type="text" v-model="totals" class="total"> </caption>
                <thead>
                     <tr>
                        <th style="text-align:center">姓名</th>
                        <th style="text-align:center">年龄</th>
                        <th style="text-align:center">性别</th>
                        <th style="text-align:center">ID</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- 如果id为5的话不显示 -->
                    <tr v-for="(item, index) in datas" :key="index">
                        <td>{{item.name}}</td>
                        <!-- 判断如果年龄是可以整除3的话则是除于3之后的值 -->
                        <td v-if="item.age % 3 == 0" :class="{'red': (item.age / 3) % 3 == 0 }">{{item.age / 3}}</td>
                        <td v-else>{{item.age}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.id}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td><input type="text" placeholder="请输入姓名" class="form-control" v-model="name"></td>
                    <td><input type="text" placeholder="请输入年龄" class="form-control" v-model="age"  ></td>
                    <td>
                        <select name="sex" id="sex" class="form-control" v-model="sex">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </td>
                    <td>
                        <a href="javascript:" class="btn btn-success" style="color: #ffffff" @click="add">+新增</a>
                    </td>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TableData',
  data () {
    return {
      	data: [
            {id:1,name:"张三",sex:"男",age:12},
            {id:2,name:"李四",sex:"男",age:20},
            {id:3,name:"王五",sex:"女",age:36},
            {id:4,name:"仁六",sex:"男",age:28},
            {id:5,name:"小米",sex:"女",age:6},
            {id:6,name:"小明",sex:"男",age:16},
        ],
        id: 6,
        name: "",
        sex: "男",
        age: "",
        total: 0,
    }

  },
  watch:{
        age (value, old) {
            if (parseInt(value) % 3 == 0){
                if (this.sex == "男"){
                    this.sex = "女"
                }else {
                    this.sex = "男";
                }

            }
        }
  },
  computed:{
      datas: {
          get: function(){
              let newData = this.data.filter(item => {
                  if (item.id % 5 != 0){
                      return item;
                  }
              })
              return newData
          }
      },
      totals: {
          get: function(){
              let numbers = this.datas.map(item => {
                  let age = item.age;
                  if (age % 3 == 0){
                      age /= 3
                  }
                  return age;
              });

              let result = numbers.reduce(function(total, num){
                  return total + num;
              })
              return result;
          },
          set: function(value){
            if (value == 0 || typeof parseInt(value) != "number" ){
                return;
            }
            if (value % 3 == 0){
                value = 0;
                alert("不可为3的倍数");
            }
          }
      }
  },
  methods: {
      add: function(){
          this.id += 1
          let obj = {
              id: this.id,
              name: this.name,
              sex: this.sex,
              age: parseInt(this.age),
          };
          this.data.push(obj);
      }
  },
  mounted(){
      alert("欢迎查看");
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
.red {
    color: red;
}
</style>
