<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      fit
      v-loading="loadingData"
      element-loading-text="拼命加载中">
      <el-table-column
        label="用户id"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="用户姓名"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="用户昵称"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="用户状态"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.status }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="用户性别"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="手机号码"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.selfPhone }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="角色名称"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.roleName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="角色ID"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.roleId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="部门名称"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deptName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="部门编号"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deptId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="创建人"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.instUser }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Email"
        width="100"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.selfEmail }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="创建日期"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.createDate }}</span>
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
            @click="handleEdit(scope.$index, scope.row)"
            v-if="funcList.indexOf('1010102')>-1">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
  	props: {
      tableData: {
      	type: Array,
        default: []
      },
      loadingData: {
      	type: Boolean,
        default: false
      }
    },
    data() {
      return {
        funcList: JSON.parse(sessionStorage.getItem('funcList'))
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$emit('edit-row', row)
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleInfo(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
