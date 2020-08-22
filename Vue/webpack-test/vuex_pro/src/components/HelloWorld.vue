<template>
  <div class="container">
    <el-col :span="12">
      <el-table
        border
        :data="data"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="编号"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="名字"
        >
        </el-table-column>
        <el-table-column
          prop="children"
          label="子节点"
        >
          <template slot-scope="scope">
            <el-table
              :data="scope.row.children"
            >
              <el-table-column
                prop="id"
                label="编号"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="名字"
              >
              </el-table-column>
              <el-table-column
                label="移动"
              >
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-right" circle @click="move(scope.row)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="12">
      <el-table
        border
        stripe
        :data="datas"
        style="width: 100%"
      >
        <el-table-column
          prop="id"
          label="编号"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="名字"
        >
        </el-table-column>
        <el-table-column
          prop="children"
          label="子节点"
        >
          <template slot-scope="scope">
            <!--            <button @click="show(scope.row.children)">查看</button>-->
            <el-table
              :data="scope.row.children"
              stripe
            >
              <el-table-column
                prop="id"
                label="编号"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="名字"
              >
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data:[
        {
          id:1,
          name:'代理管理',
          children:[
            {
              id:'1-1',
              name:'代理列表',
            },
            {
              id:'1-2',
              name:'代理等级'
            },
            {
              id:'1-3',
              name:'i1-3'
            }
          ]
        },
        {
          id:2,
          name:'卡管理',

          children:[
            {
              id:'2-1',
              name:'发卡记录'
            },
            {
              id:'2-2',
              name:'卡种管理'
            },
            {
              id:'2-3',
              name:'i2-3'
            }
          ]
        }
      ],
      datas: [

      ],
    }
  },
  methods: {
    move:function (row){
      // 找到传入的元素的父节点
      let parentObj = this.data.filter(item => {
          let flag = false;
          item.children.forEach(itemChild => {
            if (itemChild.id == row.id){
              flag = true
            }
          })
          if (flag){
            return item;
          }
      })
      // 构建出一个新的对象存储
      let obj = {}
      obj.id = parentObj[0].id
      obj.name = parentObj[0].name
      obj.children = []
      obj.children.push(row)
      // 如果datas中的数据为空 则直接放进去
      if (this.datas.length <= 0){
        this.datas.push(obj);
      }else {
        let flagDatas = true;
        this.datas.forEach(item => {
          if (item.id == obj.id){
            flagDatas = false
          }
        })
        if(flagDatas) {
          this.datas.push(obj);
        }else {
          this.datas.forEach(item => {
            if (item.id == obj.id){
              let flagItem = true
              item.children.forEach(itemChild => {
                if (itemChild.id == row.id){
                  flagItem = false
                  let index = item.children.indexOf(itemChild)
                  item.children.splice(index, 1);
                  if (item.children.length <= 0){
                    let idx = this.datas.indexOf(item)
                    this.datas.splice(idx, 1);
                  }
                }
              })
              if (flagItem){
                item.children.push(row);
              }
            }
          })
        }
      }
    }
  },
  computed: {


  },
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
