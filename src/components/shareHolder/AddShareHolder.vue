<template>
    <div class="addForm">
        <div class="title">
            <span></span>
            <h4>股东信息新增</h4>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="股东类型">
                <el-radio-group v-model="form.resource">
                    <el-radio label="企业法人"></el-radio>
                    <el-radio label="个人"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="企业/个人">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="持股比例">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="认缴出资额">
                <el-row :gutter="20">
                    <el-col :span="13">
                        <div class="grid-content bg-purple">
                            <el-input v-model="form.name"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="grid-content bg-purple">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </div>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="出资方式">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="变更依据">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="less">
.addForm {
  width: 640px;
  margin: 20px;
  color: #000;
  .title {
    vertical-align: middle;
    span {
      display: block;
      position: relative;
      top: 4px;
      float: left;
      width: 2px;
      height: 16px;
      background-color: #51aff8;
    }
    h4 {
      margin-left: 10px;
      font-weight: normal;
    }
  }
}

.el-form-item__label {
  width: 100px !important;
  text-align: left;
}
.el-form-item__content {
  margin-left: 100px !important;
}
[class*="el-col-"] {
  // padding: 0 !important;
  padding: 0 20px 0 0 !important;
}
.el-form-item{
    margin-bottom: 10px;
}
</style>

