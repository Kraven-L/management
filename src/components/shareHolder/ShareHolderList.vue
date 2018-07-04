<template>
  <div class="tablelist">
    <!-- 静态表格 -->
    <!-- <el-table :data="tableData" :border=true style="width: 100%" :select-on-indeterminate=true>
        <el-table-column align="center" type="selection">
            </el-table-column>
            <el-table-column
            prop="num"
            label="序号"
            align="center"
            width=50>
            </el-table-column>
            <el-table-column
            prop="companyName"
            label="人员姓名/企业姓名"
            align="center"
            width=200
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="percent"
            label="持股比例"
            align="center"
            width=50
            height=50>
            </el-table-column>
            <el-table-column
            prop="subscribedCapital"
            label="认缴出资额（万元）"
            align="center"
            width=95>
            </el-table-column>
            <el-table-column
                prop="subscribedDate"
                label="认缴出资日期"
                align="center">
            </el-table-column>
            <el-table-column
                prop="actualCapitalContribution"
                label="实缴出资额（万元）"
                align="center"
                width=95>
            </el-table-column>
            <el-table-column
                prop="actualDate"
                label="实缴出资日期"
                align="center">
            </el-table-column>
            <el-table-column
                prop="type"
                label="股东类型"
                align="center">
            </el-table-column>
            <el-table-column
                prop="contributionType"
                label="出资方式"
                align="center">
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                <a class="el-icon el-icon-edit"></a>
                <a class="el-icon el-icon-tickets"></a>
                <a class="el-icon el-icon-delete"></a>
                </template>
            </el-table-column>
        </el-table> -->
    <!-- 动态表格 -->
    <el-row>
      <el-button type="primary" size="medium" icon="button">
        <router-link to="/addshareholder">增加</router-link>
      </el-button>
      <el-button type="danger" size="medium">删除</el-button>
    </el-row>
    <el-table :data="tableDatas" :border=true :fit=true element-loading-text="列表正在加载中">
      <el-table-column type="selection" label="全选" width="60" align="center"></el-table-column>
      <el-table-column prop="num" label="序号" align="center" width="50"></el-table-column>
      <el-table-column label="人员姓名/企业姓名" align="center" width=200 show-overflow-tooltip>
        <template slot-scope="scope">
          <router-link to="/companyinfo">{{scope.row.companyName}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="percent" label="持股比例" align="center" width=50></el-table-column>
      <el-table-column prop="subscribedCapital" label="认缴出资额（万元）" align="center" width=95></el-table-column>
      <el-table-column prop="subscribedDate" label="认缴出资日期" align="center"></el-table-column>
      <el-table-column prop="actualCapitalContribution" label="实缴出资额（万元）" align="center" width=95></el-table-column>
      <el-table-column prop="actualDate" label="实缴出资日期" align="center"></el-table-column>
      <el-table-column prop="type" label="股东类型" align="center"></el-table-column>
      <el-table-column prop="contributionType" label="出资方式" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a class="el-icon el-icon-edit"></a>
          <a class="el-icon el-icon-tickets"></a>
          <a class="el-icon el-icon-delete"></a>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDatas: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var data = [];
      var url = "./../../static/data.json";

      this.$axios.get(url).then(res => {
        // console.log(res.data.tableData);
        this.tableDatas = res.data.tableData;
      });
    }
  }
};
</script>
<style>
/* .table{
   text-align: center;
 } */

.el-row {
  float: right;
  margin: 20px 10px;
}
.el-button--medium {
  padding: 10px 35px;
}
.el-icon {
  cursor: pointer;
  margin: 0 6px;
}
.tablelist {
  margin: 50px 20px;
  width: 1100px;
}
.tablelist tr > td,
.tablelist tr > th,
tbody {
  border-color: #ceeca6;
}
.tablelist td {
  padding: 7px 0;
}
.tablelist th {
  padding: 0;
  background: #f1fae6;
}
.el-icon-edit {
  color: #51aff8;
}
.el-icon-tickets {
  color: #ff7200;
}
.el-icon-delete {
  color: #ff0000;
}
.el-pagination {
  padding: 10px 5px;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff;
}
.el-table--border,
.el-table th.is-leaf,
.el-table--border th {
  border-color: #ceeca6;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #ceeca6;
}
a {
  text-decoration: none;
  color: #51aff8;
}
span > a {
  color: #fff;
}
</style>
