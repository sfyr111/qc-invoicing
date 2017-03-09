<template>
  <div class="minh600">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      fit
      v-loading="loadingData"
      element-loading-text="拼命加载中">
      <el-table-column
        label="供应商编码"
        width="120"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="供应商名称"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="供应商地址"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="供应商电话"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="传真"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.fax }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="邮箱"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系人"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.contacts }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="联系人电话"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.contactsPhone }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="支付方式"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.payMethod }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="支付约定"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.payAppoint }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="税务证登记号"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.taxNumber }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="开户银行"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.openBank }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="账户"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.acctNo }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="开户人"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.openAcctPerson }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="账期"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.paymentDays }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        fixed="right"
        width="220px">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            @click="handleInfo(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
  	props: {
      loadingData: {
      	type: Boolean,
        default: false
      },
      tableData: {
      	type: Array,
        default: [],
        required: true
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleEdit(index, row) {
        this.$emit('edit-row', row)
      },
      handleDelete(row) {
      	this.$emit('del-row', row.id)
      },
      handleInfo(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
