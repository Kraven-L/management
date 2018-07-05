<template>
  <div class="addForm">
    <div class="form_List d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>工商信息</h4>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="企业名称">
          <el-input v-model="form.name" placeholder="请输入企业名称"></el-input>
        </el-form-item>
        <el-form-item label="成立日期">
          <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="注册资本">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input type="text" v-model="form.capital" placeholder="请输入注册资本" suffix="啊%"></el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-select v-model="form.value1">
                <el-option v-for="item in form.options1" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="法人代表">
          <el-input v-model="form.corporation" placeholder="请输入法人代表"></el-input>
        </el-form-item>
        <el-form-item label="企业类型">
          <el-select v-model="form.region" placeholder="请选择企业类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="经营状态">
          <el-select v-model="form.region" placeholder="请选择经营状态">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属行业">
          <el-input v-model="form.trade" placeholder="请输入所属行业"></el-input>
        </el-form-item>
        <el-form-item label="登记机关">
          <el-input v-model="form.department" placeholder="请输入登记机关"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码">
          <el-input v-model="form.code" placeholder="请输入统一社会信用代码"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="5">
            <el-select v-model="form.value2">
              <el-option v-for="item in form.options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col class="line" :span="1">省</el-col>
          <el-col :span="5">
            <el-select v-model="form.value3">
              <el-option v-for="item in form.options3" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col class="line" :span="1">市</el-col>
          <el-col :span="12">
            <el-input v-model="form.place" placeholder="请输入注册地址"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="经营范围">
          <el-input type="textarea" v-model="form.range" placeholder="请输入经营范围" :rows="5"></el-input>
        </el-form-item>
        <el-form-item label="曾用名">
          <el-input v-model="form.nameBefore" placeholder="请输入曾用名，并用“，”隔开"></el-input>
        </el-form-item>
        <el-form-item label="是否上市">
          <el-radio-group v-model="form.isStaff">
            <el-radio label="上市">是</el-radio>
            <el-radio label="没上市">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="归口管理经营单元">
          <el-input v-model="form.managementUnit" placeholder="请输入归口管理经营单元"></el-input>
        </el-form-item>
        <el-form-item label="公司头像">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload1">
            <img v-if="form.imageUrl1" :src="form.imageUrl1" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <!-- <el-form-item label="">
          <el-button type="success" @click="onSubmit">确认</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item> -->
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">确认添加</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="form_List second d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>股东信息新增</h4>
        <a href="">查看股东结构详情</a>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="股东类型">
          <el-radio-group v-model="form.isStaff">
            <el-radio label="企业法人"></el-radio>
            <el-radio label="个人"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="企业/个人">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入法人代表"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary">去创建</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="持股比例">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入法人代表"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="认缴出资额">
          <el-col :span="16">
            <el-input v-model="form.name" placeholder="请输入认缴出资额"></el-input>
          </el-col>
          <el-col :span="7">
            <el-date-picker type="date" placeholder="选择出资日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="实缴出资额">
          <el-col :span="16">
            <el-input v-model="form.name" placeholder="请输入实缴出资额"></el-input>
          </el-col>
          <el-col :span="7">
            <el-date-picker type="date" placeholder="选择出资日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="出资方式">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入法人代表"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>

        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">确认添加</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
      <div class="title">
        <span></span>
        <h4>股东信息预览</h4>
      </div>
      <div class="tablelist">
        <el-table :data="tableData1" :border=true style="width: 100%" :select-on-indeterminate=true>
          <el-table-column prop="num" label="序号" align="center" width=50>
          </el-table-column>
          <el-table-column prop="companyName" label="人员姓名/企业姓名" align="center" width=380 show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="percent" label="持股比例" align="center" width=50 height=50>
          </el-table-column>
          <el-table-column prop="subscribedCapital" label="认缴出资额（万元）" align="center" width=95>
          </el-table-column>
          <el-table-column prop="subscribedDate" label="认缴出资日期" align="center">
          </el-table-column>
          <el-table-column prop="actualCapitalContribution" label="实缴出资额（万元）" align="center" width=95>
          </el-table-column>
          <el-table-column prop="actualDate" label="实缴出资日期" align="center">
          </el-table-column>
          <el-table-column prop="type" label="股东类型" align="center">
          </el-table-column>
          <el-table-column prop="contributionType" label="出资方式" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a class="el-icon el-icon-delete"></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="form_List second d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>董监高人员新增</h4>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入姓名"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary">选择现有人员</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入身份证号码"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="职务">
          <el-col :span="16">
            <el-checkbox-group v-model="form.checkList" :min="1">
              <el-checkbox label="董事长"></el-checkbox>
              <el-checkbox label="董事"></el-checkbox>
              <el-checkbox label="监事"></el-checkbox>
              <el-checkbox label="总经理"></el-checkbox>
            </el-checkbox-group>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="任期">
          <div class="addList clearfix">
            <el-col :span="3">
              <p>董事长</p>
            </el-col>
            <el-col :span="21">
              <el-date-picker v-model="form.value4" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </div>
          <div class="addList clearfix">
            <el-col :span="3">
              <p>董事</p>
            </el-col>
            <el-col :span="21">
              <el-date-picker v-model="form.value4" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </div>
          <div class="addList clearfix">
            <el-col :span="3">
              <p>监事</p>
            </el-col>
            <el-col :span="21">
              <el-date-picker v-model="form.value4" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </div>
          <div class="addList clearfix">
            <el-col :span="3">
              <p>总经理</p>
            </el-col>
            <el-col :span="21">
              <el-date-picker v-model="form.value4" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">确认添加</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
      <div class="title">
        <span></span>
        <h4>董监高人员信息预览</h4>
      </div>
      <div class="tablelist th_Padding">
        <el-table :data="tableData2" :border=true style="width: 100%" :select-on-indeterminate=true>
          <el-table-column prop="num" label="序号" align="center" width=50>
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center" width=380 show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="IDcard" label="身份证号" align="center" height=50>
          </el-table-column>
          <el-table-column prop="job" label="职务及任期" align="center">
          </el-table-column>
          <el-table-column prop="jobStatus" label="任职状态" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a class="el-icon el-icon-delete"></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="form_List third d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>分支机构公司信息新增</h4>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分支机构名称">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入姓名"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary">选择现有人员</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="分支机构类型">
          <el-radio-group v-model="form.isStaff">
            <el-radio label="子公司"></el-radio>
            <el-radio label="分公司"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="经营状态">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="由分支机构带出"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">确认添加</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
      <div class="title">
        <span></span>
        <h4>董监高人员信息预览</h4>
      </div>
      <div class="tablelist th_Padding">
        <el-table :data="tableData3" :border=true style="width: 100%" :select-on-indeterminate=true>
          <el-table-column prop="num" label="序号" align="center" width=50>
          </el-table-column>
          <el-table-column prop="name" label="分支机构名称" align="center" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="type" label="分支结构类型" align="center">
          </el-table-column>
          <el-table-column prop="status" label="状态" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
              <a class="el-icon el-icon-delete"></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="form_List third d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>联系人新增</h4>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="头像">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload2">
            <img v-if="form.imageUrl2" :src="form.imageUrl2" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">建议上传照片，方便在查人员时快速识别</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="姓名">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入姓名"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary">选择现有联系人</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="是否中联员工">
          <el-col :span="7">
            <el-radio-group v-model="form.isStaff" @change="isZoomlionStaff">
              <el-radio label="yes">是</el-radio>
              <el-radio label="no">否</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="9">
            <el-input v-model="form.corporation" placeholder="请输入中联重科8位数工号" v-show="form.isZoomlion"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入身份证号码"></el-input>
          </el-col>
          <el-col :span="8">

          </el-col>
        </el-form-item>
        <el-form-item label="职务">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入职务"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="手机">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入手机号码"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="座机">
          <el-col :span="3">
            <el-input v-model="form.corporation" placeholder="区号"></el-input>

          </el-col>
          <el-col :span="1">
            <p>-</p>
          </el-col>
          <el-col :span="12">
            <el-input v-model="form.corporation" placeholder="电话号码"></el-input>
          </el-col>

          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="微信">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入微信号码"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="地址">
          <el-col :span="16">
            <el-input v-model="form.corporation" placeholder="请输入地址"></el-input>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onSubmit">确认添加</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
      <div class="title">
        <span></span>
        <h4>联系人信息预览</h4>
      </div>
      <div class="tablelist th_Padding">

        <el-table :data="tableData4" :border=true :fit=true element-loading-text="列表正在加载中">
          <el-table-column type="selection" label="全选" width="60" align="center"></el-table-column>
          <el-table-column prop="name" label="联系人姓名" align="center" width="100">
          </el-table-column>
          <el-table-column prop="IDcard" label="身份证号" align="center"></el-table-column>
          <el-table-column prop="job" label="职务" align="center" width="80"></el-table-column>
          <el-table-column prop="mobile" label="手机" align="center"></el-table-column>
          <el-table-column prop="phone" label="座机" align="center"></el-table-column>
          <el-table-column prop="wechat" label="微信" align="center"></el-table-column>
          <el-table-column prop="address" label="联系地址" align="center" width="280"></el-table-column>
          <el-table-column label="操作" align="center" width="80">
            <template slot-scope="scope">
              <a class="el-icon el-icon-delete"></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="form_List third d_jump">
      <div class="title clearfix">
        <span></span>
        <h4>审批流程及其他文件</h4>
        <el-button type="primary" @click="form.centerDialogVisible = true">增加</el-button>
        <el-dialog :visible.sync="form.centerDialogVisible" width="40%" center>
          <span slot="title" class="dialog-title">
            <div class="title clearfix">
              <span></span>
              <h4>新增审批流程及其他文件</h4>
            </div>
          </span>
          <span>
            <div class="addForm_inner">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文件类型">
                  <el-select v-model="form.value6" placeholder="请选择文件类型">
                    <el-option v-for="item in form.options5" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="文件名称">
                  <el-input v-model="form.fileName2"></el-input>
                </el-form-item>
                <el-form-item label="文件">
                  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="form.fileList">
                    <el-button size="small" type="primary">选取文件</el-button>
                    <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                  </el-upload>
                </el-form-item>
                <el-form-item label="">
                  <el-button type="success" @click="form.centerDialogVisible = false">确认</el-button>
                  <el-button type="info" @click="form.centerDialogVisible = false">取消</el-button>

                </el-form-item>

              </el-form>
            </div>
          </span>
        </el-dialog>
      </div>
      <div class="tablelist th_Padding">
        <el-table :data="tableData5" :border=true :fit=true element-loading-text="列表正在加载中">
          <el-table-column prop="num" label="序号" width="80" align="center"></el-table-column>
          <el-table-column label="文件类型" align="center" width="240">
            <template slot-scope="scope">
              <el-select v-model="form.value5">
                <el-option v-for="item in form.options5" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="文件名称" align="center">
            <template slot-scope="scope">
              <el-input v-model="form.fileName1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="file" label="文件" align="center"></el-table-column>
          <el-table-column label="操作" align="center" width="80">
            <template slot-scope="scope">
              <a class="el-icon el-icon-upload2"></a>
              <a class="el-icon el-icon-delete"></a>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="confirm">
        <el-button type="success">完成</el-button>
      </div>
    </div>
    <div class="fixed">
      <ul>
        <li v-for="(item,index) in fixedList" :key="index" @click="jump(index)" :class="{active:index==current}">
          <el-tooltip class="item" effect="dark" :content=item.title placement="left">
            <span>
              {{item.num}}
            </span>
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "", //企业名称
        date1: "", //成立日期
        capital: "", //注册资本
        corporation: "", //法人代表
        trade: "", //所属行业
        range: "", //经营范围
        department: "", //登记机关
        code: "", //统一社会信用代码
        place: "", //注册地址
        nameBefore: "", //曾用名
        managementUnit: "", //归口管理经营单元
        options1: [
          {
            value: "选项1",
            label: "人民币"
          },
          {
            value: "选项2",
            label: "美元"
          },
          {
            value: "选项3",
            label: "欧元"
          }
        ],
        options2: [
          {
            value: "选项1",
            label: "北京"
          },
          {
            value: "选项2",
            label: "上海"
          },
          {
            value: "选项3",
            label: "天津"
          },
          {
            value: "选项4",
            label: "重庆"
          }
        ],
        options3: [
          {
            value: "选项1",
            label: "北京"
          },
          {
            value: "选项2",
            label: "上海"
          },
          {
            value: "选项3",
            label: "天津"
          },
          {
            value: "选项4",
            label: "重庆"
          }
        ],
        options5: [
          {
            value: "选项1",
            label: "营业证件"
          },
          {
            value: "选项2",
            label: "公司章程"
          },
          {
            value: "选项3",
            label: "其他"
          }
        ],
        value1: "人民币",
        value2: "北京",
        value3: "北京",
        value4: "",
        value5: "营业证件",
        value6: "",
        imageUrl1: "",
        imageUrl2: "",
        checkList: ["董事长", "董事"],
        isStaff: "yes",
        isZoomlion: true,
        fileName1: "营业执照",
        fileName2: "",
        centerDialogVisible: false,
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
      },
      formLabelWidth: "120px",
      tableData1: [
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
        }
      ],
      tableData2: [
        {
          num: 1,
          name: "王维",
          IDcard: "123234345455675667",
          job: "董事  2010.6.1-2015.6.1",
          jobStatus: "过期"
        }
      ],
      tableData3: [
        {
          num: 1,
          name: "中联重科股份有限公司北京分公司",
          type: "一级子公司",
          status: "存续"
        }
      ],
      tableData4: [
        {
          name: "詹纯新",
          IDcard: "123456198807181523",
          job: "董事长",
          mobile: "18178787878",
          phone: "073188989898",
          wechat: "18178787878",
          address: "长沙市岳麓区中联重科麓谷工业园"
        },
        {
          name: "詹纯新",
          IDcard: "123456198807181523",
          job: "董事长",
          mobile: "18178787878",
          phone: "073188989898",
          wechat: "18178787878",
          address: "长沙市岳麓区中联重科麓谷工业园"
        }
      ],
      tableData5: [
        {
          num: 1,
          name: "詹纯新",
          IDcard: "123456198807181523",
          file: "营业执照.jpg"
        }
      ],
      // fixedList: [1, 2, 3, 4, 5, 6],
      fixedList: [
        {
          num: 1,
          title: "工商信息"
        },
        {
          num: 2,
          title: "股东信息新增"
        },
        {
          num: 3,
          title: "董监高人员新增"
        },
        {
          num: 4,
          title: "分支机构公司信息新增"
        },
        {
          num: 5,
          title: "联系人新增"
        },
        {
          num: 6,
          title: "审批流程及其他文件"
        }
      ],
      current: 0
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess1(res, file) {
      this.form.imageUrl1 = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccess2(res, file) {
      this.form.imageUrl2 = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload1(file) {
      const isPic = file.type === "image/jpeg" || file.type === "image/png";
      console.log("beforeAvatarUpload1 " + isPic);
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isPic) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isPic && isLt2M;
    },
    beforeAvatarUpload2(file) {
      const isPic = file.type === "image/jpeg" || file.type === "image/png";
      console.log("beforeAvatarUpload2 " + isPic);
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isPic) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isPic && isLt2M;
    },
    jump(index) {
      let jump = document.querySelectorAll(".d_jump");
      // 获取需要滚动的距离
      let total = jump[index].offsetTop;
      window.scrollTo(0, total);
      //当前点击标签添加样式
      this.current = index;
      // // Chrome
      // document.body.scrollTop = total;
      // // Firefox
      // document.documentElement.scrollTop = total;
      // // Safari
      // window.pageYOffset = total;
    },
    isZoomlionStaff() {
      this.form.isZoomlion = !this.form.isZoomlion;
    },

    //弹框
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
  color: #000;
  box-sizing: border-box;
  .form_List {
    padding: 0 20px 20px;
    border-bottom: 1px solid #ddd;
    .title {
      > span {
        display: block;
        position: relative;
        top: 22px;
        float: left;
        width: 2px;
        height: 16px;
        background-color: #51aff8;
      }
      h4 {
        float: left;
        line-height: 60px;
        margin-left: 10px;
        font-weight: normal;
      }
      > a {
        float: left;
        text-decoration: none;
        font-size: 14px;
        line-height: 60px;
        color: #51aff8;
        margin-left: 20px;
        font-weight: bold;
      }
      > button {
        float: right;
        margin-top: 10px;
        padding: 12px 25px;
      }
      .el-dialog__header {
        border-bottom: 1px solid #ddd;
        padding: 0;
      }
      .el-dialog--center .el-dialog__body {
        padding: 20px 10px;
      }
      .title {
        padding-left: 20px;
        span {
          display: block;
          position: relative;
          top: 17px;
          float: left;
          width: 2px;
          height: 16px;
          background-color: #51aff8;
        }
        h4 {
          line-height: 50px;
          margin-left: 10px;
          font-weight: normal;
        }
      }
      .addForm_inner {
        width: 100%;
        padding: 0 20px;
        color: #000;
        box-sizing: border-box;

        .el-form {
          .el-form-item {
            margin-bottom: 10px;
            .el-form-item__label {
              width: 80px !important;
              text-align: left;
            }
            .el-form-item__content {
              margin-left: 80px !important;
              > button {
                padding: 12px 35px;
                font-size: 16px;
              }
              .el-select {
                display: block;
              }
            }
          }
        }
      }
    }
    > .el-form {
      .el-form-item {
        margin-bottom: 10px;
        width: 65%;
        &:nth-child(10),
        &:nth-child(11) {
          width: 80%;
        }
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
        .el-form-item__label {
          width: 130px !important;
          text-align: left;
        }
        .el-form-item__content {
          margin-left: 130px !important;
          [class*="el-col-"] {
            padding: 0 10px 0 0;
            &:nth-last-child(1) {
              padding: 0;
            }
            button {
              padding: 12px 25px;
            }
          }
          > button {
            width: 100px;
            height: 35px;
            padding: 0;
            font-size: 14px;
            line-height: 35px;
          }
          .el-select {
            display: block;
          }
          .addList {
            margin-bottom: 10px;
          }
          p {
            text-align: center;
          }
        }
      }
    }
    &.second {
      .el-form-item {
        width: 65%;
        .el-form-item__label {
          width: 90px !important;
          text-align: left;
        }
        .el-form-item__content {
          margin-left: 90px !important;
        }
      }
    }
    &.third {
      .el-form-item {
        // width: 65%;
        .el-form-item__label {
          width: 100px !important;
          text-align: left;
        }
        .el-form-item__content {
          margin-left: 100px !important;
        }
      }
    }
    .confirm {
      text-align: center;
      padding-top: 20px;
      button {
        padding: 12px 30px;
      }
    }
  }
  .fixed {
    position: fixed;
    right: 20px;
    top: 120px;
    z-index: 999;
    ul {
      text-align: center;
      li {
        margin-bottom: 20px;
        cursor: pointer;
        line-height: 24px;
        width: 24px;
        height: 24px;
        background: #999;
        border-radius: 50%;
        color: #fff;
        position: relative;
        &.active {
          background: #ff8a00;
        }
        &::after {
          content: "";
          height: 20px;
          border-right: 1px solid #ddd;
          position: absolute;
          top: 24px;
          left: 11px;
        }
        &:nth-last-child(1) {
          &::after {
            border: none;
          }
        }
      }
    }
  }
}

// 上传头像样式
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  float: left;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
.el-upload__tip {
  float: left;
  margin: 0 0 0 20px;
  line-height: 100px;
  color: #999;
}

//表格样式

.tablelist {
  tr > td,
  tr > th,
  tbody {
    border-color: #ceeca6;
  }
  td {
    padding: 7px 0;
  }
  th {
    padding: 0;
    background: #f1fae6;
  }
  &.th_Padding {
    th {
      padding: 7px 0;
    }
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
  .el-icon-delete {
    color: #ff0000;
  }
}
</style>

