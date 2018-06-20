<template>
  <div class="tablelist">
    <!-- 表格 -->
    <el-table :data="tableData" :border=true style="width: 100%" :select-on-indeterminate=true>
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
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: 1,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 2,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 3,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 4,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 5,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 6,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 7,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 8,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 9,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        },
        {
          num: 10,
          companyName: "芜湖市建设投资有限公司",
          percent: "50%",
          subscribedCapital: "150,000.00",
          subscribedDate: "2013-06-02",
          actualCapitalContribution: "150,000.00",
          actualDate: "2013-06-02",
          type: "企业法人",
          contributionType: "货币",
          operation: 1
        }
        // {
        //   num: 11,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 12,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 13,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 14,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 15,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 16,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 17,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 18,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 19,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // },
        // {
        //   num: 20,
        //   companyName: "芜湖市建设投资有限公司",
        //   percent: "50%",
        //   subscribedCapital: "150,000.00",
        //   subscribedDate: "2013-06-02",
        //   actualCapitalContribution: "150,000.00",
        //   actualDate: "2013-06-02",
        //   type: "企业法人",
        //   contributionType: "货币",
        //   operation: 1
        // }
      ]
    };
  },
  methods: {}
};
</script>
<style>
/* .table{
   text-align: center;
 } */
.el-icon {
  cursor: pointer;
  margin: 0 6px;
}
.tablelist {
  width: 1140px;
}
.tablelist td,
.tablelist th {
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
</style>
