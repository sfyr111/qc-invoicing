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
        label="部门id"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deptId }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="部门编码"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.deptCode }}</span>
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
        label="部门地址"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px" :title="scope.row.deptAddress">{{ scope.row.deptAddress }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="上级部门Id"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.upDeptId }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="是否有效"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.status }}</span>
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
        label="创建时间"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.instTime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="修改人"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.lupdUser }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="修改时间"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.lupdTime }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="备注"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.memo }}</span>
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
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$emit('row-edit', row)
      },
      handleDelete(index, row) {
        this.$emit('row-del', row.roleId)
      },
      handleInfo(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
