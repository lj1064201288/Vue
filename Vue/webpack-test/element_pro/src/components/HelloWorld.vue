<template>
  <div class="container">
<!--    <el-table-->
<!--      :data="tableData"-->
<!--      ref="multipleTable"-->
<!--      max-height="350"-->
<!--      highlight-current-row-->
<!--      @current-change="handleCyrrentChange"-->
<!--      border-->
<!--      :row-class-name="tableRowClassName"-->
<!--      style="width: 100%">-->
<!--      <el-table-column-->
<!--        type="selection"-->
<!--        width="55">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        type="index"-->
<!--      ></el-table-column>-->
<!--      <el-table-column-->
<!--        sortable-->
<!--        prop="date"-->
<!--        label="日期"-->
<!--        width="150">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        label="配送信息"-->
<!--      >-->
<!--        <el-table-column-->
<!--          sortable-->
<!--          prop="name"-->
<!--          label="姓名"-->
<!--          width="120">-->
<!--        </el-table-column>-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        label="地址"-->
<!--      >-->
<!--        <el-table-column-->
<!--          prop="province"-->
<!--          label="省份"-->
<!--          width="120"-->
<!--        ></el-table-column>-->
<!--        <el-table-column-->
<!--          prop="city"-->
<!--          label="市区"-->
<!--          width="120"-->
<!--        ></el-table-column>-->
<!--        <el-table-column-->
<!--          label="地址"-->
<!--          width="300"-->
<!--        >-->
<!--          <template slot-scope="scope">-->
<!--            <div>{{ scope.row.address }}</div>-->
<!--            <div>{{ scope.row.address }}</div>-->
<!--            </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          prop="zip"-->
<!--          label="邮编"-->
<!--          width="100"-->
<!--        ></el-table-column>-->
<!--      </el-table-column>-->

<!--      <el-table-column-->
<!--        fixed="right"-->
<!--        label="操作"-->
<!--        width="150"-->
<!--      >-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>-->
<!--          <el-button type="text" size="small">编辑</el-button>-->
<!--          <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">移除</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--    <div style="margin-top: 20px">-->
<!--      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>-->
<!--      <el-button @click="setCurrent()">取消选择</el-button>-->
<!--    </div>-->
    {{msg}}||{{vuex_msg}}||{{name}}
    <button @click="upName(2125)"> 点击</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      currentRow: "2255",
      msg:"dd",
    }
  },
  props:["aa"],
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex % 2 === 1) {
        return 'warning-row';
      } else if (rowIndex % 2 === 0) {
        return 'success-row';
      }
        return '';
    },
    handleClick: function (row){
        alert(JSON.stringify(row));
    },
    deleteRow(index, rows){
      console.log("asdasd");
      rows.splice(index, 1);
    },
    handleCyrrentChange: function (val){
      this.currentRow = val;
      // alert(JSON.stringify(this.currentRow));
      // console.log(this.currentRow);
    },
    setCurrent(row){
      this.$refs.singleTable.setCurrentRow(row);
    },
    check:function(){
      this.$store.commit("upName",{value:12})
    },
    ...mapMutations(["upName"])
   },
  computed:{
    vuex_msg(){
      return this.$store.state.name
    },
    ...mapState(["name"])
  },
  mounted(){

    // this.msg=this.$store.state.name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
