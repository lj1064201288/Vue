<template>
  <h1 v-if="isVisit">{{isVisit}}</h1>
  <div class="main" v-else>
    <div class="search">
        <el-input
          placeholder="请输入用户名称"
          prefix-icon="el-icon-search"
          size="small"
          style="width: 200px"
          v-model="search_con"
         >
        </el-input>
        <el-button type="success" icon="el-icon-search"
                   size="small"
                   @click="search"
        >搜索</el-button>
        <el-button size="small" type="warning" @click="reset">重置</el-button>

    </div>
    <div class="btn-group">
      <el-row>
        <el-button size="small" type="primary" plain><i class="el-icon-plus"></i> 新增</el-button>
        <el-button type="success"  size="small" plain>修改</el-button>
        <el-button type="danger"  size="small" plain @click="deleteData">删除</el-button>
        <el-button type="info"  size="small" plain>导入</el-button>
        <el-button type="warning"  size="small" plain>导出</el-button>
      </el-row>
      <el-row>
        <el-table
          ref="multipleTable"
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          tooltip-effect="dark"
          style="width: 100%"
          highlight-current-row
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            sortable
            prop="id"
            label="用户编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名称"
            width="120">
          </el-table-column>

          <el-table-column
            prop="usernick"
            label="用户昵称"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="department"
            label="部门"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号码"
            show-overflow-tooltip>
          </el-table-column>

          <el-table-column
            label="状态"
            prop="status"
            show-overflow-tooltip>
              <template slot-scope="scope">
                <el-switch
                  active-color="#13ce66"
                  v-model="scope.row.status"
                  active-value="1"
                  inactive-value='0'
                  inactive-color="#ff4949">
                </el-switch>
              </template>
          </el-table-column>
          <el-table-column
            prop="createTime"
            sortable
            label="注册时间"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            label="操作"
            show-overflow-tooltip>
            <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  slot="reference">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          background
          :page-size="pagesize"
          layout="prev, pager, next"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "manage",
  data: () => {
    return {
      isVisit: false,
      tableData: [],
      search_con: '',
      pagesize: 4,
      currentPage: 1,
      multipleSelection: [],
    }
  },
  methods: {
    // 搜索数据事件
    search: function (){
      this.currentPage = 1;
      this.tableData = JSON.parse(localStorage.getItem('userinfo'));
      if (!this.search_con){
          return false
      }else {
        this.tableData = this.tableData.filter(item => {
          if (item.usernick.includes(this.search_con)){
            return item
          }
        })
      }
    },
    // 删除单条数据函数
    handleDelete: function (index, item){
      this.$confirm("是否要删除这条数据？", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      }).then(()=>{
        this.tableData.forEach( items => {
          if (items.id == item.id){
            let idx = this.tableData.indexOf(item);
            this.tableData.splice(idx, 1);
          }
        })
        if ((this.currentPage-1)*this.pagesize >= this.tableData.length){
          this.currentPage = Math.ceil(this.tableData.length / this.pagesize);
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(()=>{
        this.$message({
          type: 'info',
          message: '取消删除'
        });
      })
    },
    reset: function (){
      this.search_con = ''
      this.tableData = JSON.parse(localStorage.getItem('userinfo'));
    },
    // 分页前后按钮
    handleSizeChange: function (size){
      this.pagesize = size;
    },
    // 分页按钮
    handleCurrentChange: function (currentPage){
      this.currentPage = currentPage;
    },
    // 删除选中数据事件
    deleteData: function () {
      for (let i=0; i<this.multipleSelection.length; i++){
        this.tableData.forEach(item => {
          if (item.id == this.multipleSelection[i].id){
            let index = this.tableData.indexOf(item);
            this.tableData.splice(index, 1);
          }
        })
      }
    },
    // 获取选中的数据事件
    handleSelectionChange: function (val){
      this.multipleSelection = val
    },
  },
  mounted() {
    let isVisit = localStorage.getItem("isVisit");
    // 判断是否有权限查看
    if (isVisit){
      this.isVisit = isVisit
    }else {
      this.isVisit = false
    }
    // 将数据挂载到表格中
    this.tableData = JSON.parse(localStorage.getItem('userinfo'));
  }
}
</script>

<style scoped>
.search, .btn-group {
  text-align: left;
}
.btn-group {
  margin-top: 20px;
}
.block {
  margin-top: 20px;
}

</style>
