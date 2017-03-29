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
        label="是否要授权"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.accessType }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="功能级别"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.functionLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="功能名称"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.functionName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="功能排序"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.functionOrder }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="URL"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.functionUrl }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="是否有效"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.isValid }}</span>
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
        label="上级编号"
        width="180"
        align="center">
        <template scope="scope">
          <span style="margin-left: 10px">{{ scope.row.parentFunctionId }}</span>
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
            @click="handleEdit(scope.$index, scope.row)"
            v-if="funcList.indexOf('1010301')>-1">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            v-if="funcList.indexOf('1010303')>-1">删除</el-button>
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
        this.$emit('row-edit', row)
      },
      handleDelete(index, row) {
        this.$emit('menu-del', row.functionId)
      },
      handleInfo(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
