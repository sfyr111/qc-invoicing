<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
        <!--<el-menu-item index="category">分类管理</el-menu-item>-->
        <el-menu-item index="productList">商品列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-date"></i>库存管理</template>
        <el-menu-item index="storageList">库存列表</el-menu-item>
        <el-menu-item index="storageInput">入库管理</el-menu-item>
        <el-menu-item index="storageOutput">出库管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-star-on"></i>财务管理</template>
        <el-menu-item index="financeList">供应商退货财务收款列表</el-menu-item>
        <el-menu-item index="reportBai">客户白条管理报表</el-menu-item>
        <el-menu-item index="reportFinance">财务付款报表</el-menu-item>
        <el-menu-item index="reportPurchase">采购报表</el-menu-item>
        <el-menu-item index="reportSale">销售明细报表</el-menu-item>
        <el-menu-item index="reportStorage">库存进销存报表</el-menu-item>
        <el-menu-item index="reportVendor">供应商欠款报表</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-menu"></i>模板管理</template>
        <el-menu-item index="template">模板下载</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-menu"></i>采购管理</template>
        <el-menu-item index="listPurchase">采购单列表</el-menu-item>
        <el-menu-item index="listReturn">退货单列表</el-menu-item>
        <el-menu-item index="review">审核订单</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-menu"></i>供应商管理</template>
        <el-menu-item index="vendorList">供应商列表</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
        <el-menu-item index="userList">用户管理</el-menu-item>
        <el-menu-item index="menuList">菜单管理</el-menu-item>
        <el-menu-item index="roleList">角色管理</el-menu-item>
        <el-menu-item index="deptList">部门管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
     data () {
      return {
        tabIndex: '2-1'
      }
    },
    created() {
     	this.navInit()
    },
    methods: {
      navInit() {

      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
