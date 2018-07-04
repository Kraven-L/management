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
                <!-- <el-row :gutter="20"> -->
                <el-col :span="13">
                    <div class="grid-content bg-purple">
                        <el-input v-model="form.name"></el-input>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div class="grid-content bg-purple">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </div>
                </el-col>
                <!-- </el-row> -->
            </el-form-item>
            <el-form-item label="实缴出资额">
                <!-- <el-row :gutter="20"> -->
                <el-col :span="13">
                    <div class="grid-content bg-purple">
                        <el-input v-model="form.name"></el-input>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div class="grid-content bg-purple">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </div>
                </el-col>
                <!-- </el-row> -->
            </el-form-item>
            <el-form-item label="出资方式">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="变更依据">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </el-form-item>
            <el-form-item label="">
                <el-button type="success" @click="onSubmit">确认</el-button>
                <el-button type="info">取消</el-button>
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
      },
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style lang="less">
.addForm {
  width: 100%;
  padding: 0 20px;
  color: #000;
  box-sizing: border-box;
  .title {
    span {
      display: block;
      position: relative;
      top: 22px;
      float: left;
      width: 2px;
      height: 16px;
      background-color: #51aff8;
    }
    h4 {
      line-height: 60px;
      margin-left: 10px;
      font-weight: normal;
    }
  }
  
}

.el-form-item__label {
  width: 90px !important;
  text-align: left;
}
.el-form-item__content {
  margin-left: 90px !important;
  > button {
    padding: 12px 35px;
  }
}
[class*="el-col-"] {
  padding: 0 10px 0 0;
  &:nth-last-child(1) {
    padding: 0;
  }
}
.el-form-item {
  margin-bottom: 10px;
}
</style>

