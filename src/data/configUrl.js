let devRootPath = 'http://192.168.16.210:9080/qc-invoicing/';
let proRootPath = 'http://eoms.17cai.com/qc-invoicing/';
let rootPath = process.env.NODE_ENV === "production" ? proRootPath : devRootPath;
let imgPath = process.env.NODE_ENV === "production" ? "http://jl.17cai.com/static/img/" : "http://127.0.0.1/static/img/";
const configUrl = {
  imgPath,
  //	产品列表
  productList: {
    dataUrl: rootPath + 'product/getProductList'
  },
  // 新增产品
  productAdd: {
    dataUrl: rootPath + 'product/addProduct'
  },
  // 批量导入商品
  importProduct: {
    dataUrl: rootPath + 'import/sku'
  },
  // 导出商品列表
  exportProductList: {
    dataUrl: rootPath + 'import/exportProduct'
  },
  // 修改产品
  productEdit: {
    dataUrl: rootPath + 'product/updateProduct'
  },
  // 查看商品
  productDetail: {
    dataUrl: rootPath + 'product/getProductDetail'
  },
  // 同步商品
  productSync: {
    dataUrl: rootPath + 'product/syncSku'
  },
  // 查询供应商价格列表
  supplierPriceList: {
    dataUrl: rootPath + 'product/getSupplierPriceList'
  },
  // 商品供应商价格保存
  productSupplierPriceSave: {
    dataUrl: rootPath + 'product/addOrEditSuppSkuPrice'
  },
  // 根据特征分类查询特征组合
  productFeatureList: {
    dataUrl: rootPath + 'product/getFeatureList'
  },
  // 根据特征分类查询特征组合
  productSuppInfo: {
    dataUrl: rootPath + 'product/getProductSuppInfo'
  },
  // CategoryList
  categoryList: {
    dataUrl: rootPath + 'product/getCategoryForSelect'
  },
  // supplierlist
  supplierlist: {
    dataUrl: rootPath + 'supplier/getSupplierByParams'
  },
  // supplierDel
  supplierDel: {
    dataUrl: rootPath + 'supplier/deleteSupplier'
  },
  // supplierInf
  supplierInf: {
    dataUrl: rootPath + 'supplier/getSupplierDetail'
  },
  // supplierEdit
  supplierEdit: {
    dataUrl: rootPath + 'supplier/editSupplier'
  },
  // 批量导入供应商
  importSupplier: {
    dataUrl: rootPath + 'import/supplier'
  },
  // supplierAdd
  supplierAdd: {
    dataUrl: rootPath + 'supplier/addSupplier'
  },
  // supplierContractAdd
  supplierContractAdd: {
    dataUrl: rootPath + 'supplier/addSupplierContract'
  },
  // supplierContractEdit
  supplierContractEdit: {
    dataUrl: rootPath + 'supplier/editSupplierContract'
  },
  // supplierContractDel
  supplierContractDel: {
    dataUrl: rootPath + 'supplier/deleteSupplierContract'
  },
  // supplierContractDown
  supplierContractDown: {
    dataUrl: rootPath + 'supplier/downloadSupplierContract'
  },
  // supplierContractList
  supplierContractList: {
    dataUrl: rootPath + 'supplier/getSupplierContractBySupplierId'
  },
  //  采购管理 商品列表
  listPurchaseUrl: {
    dataUrl: rootPath + 'purchase/purchase_order_list'
  },
  //  采购管理 商品列表
  listPurchaseDetail: {
    dataUrl: rootPath + 'purchase/purchase_order_detail'
  },

  //  选择商品 商品分类树
  supplierProCategoryTree: {
    dataUrl: rootPath + 'purchase/supplier_product_category_tree'
  },

  //  新增采购单  选择商品 商品列表
  purchaseSupplierProList: {
    dataUrl: rootPath + 'purchase/purchase_supplier_product_list'
  },

  //  查询仓库
  warehouseSearch: {
    dataUrl: rootPath + 'warehouse/warehouse_search'
  },

  //  新建采购单
  purchaseAdd: {
    dataUrl: rootPath + 'purchase/purchase_add'
  },
  // 用户列表
  userList: {
    dataUrl: rootPath + 'powermgr/poweruserlist'
  },
  // 用户保存
  userSave: {
    dataUrl: rootPath + 'powermgr/save'
  },
  // 部门列表
  deptList: {
    dataUrl: rootPath + 'powermgr_dept/powerdeptlist'
  },
  // 部门保存
  deptSave: {
    dataUrl: rootPath + 'powermgr_dept/save'
  },
  // 部门删除
  deptDel: {
    dataUrl: rootPath + 'powermgr_dept/powerdeptdele'
  },
  // 菜单列表
  menuList: {
    dataUrl: rootPath + 'powermgr_function/powerfunctionlist'
  },
  // 菜单保存
  menuSave: {
    dataUrl: rootPath + 'powermgr_function/powerfunctionaddedit'
  },
  // 菜单删除
  menuDel: {
    dataUrl: rootPath + 'powermgr_function/powerdeptdele'
  },
  // 角色列表
  roleList: {
    dataUrl: rootPath + 'powermgr_role/powerrolelist'
  },
  // 角色保存
  roleSave: {
    dataUrl: rootPath + 'powermgr_role/save'
  },
  // 角色删除
  roleDel: {
    dataUrl: rootPath + 'powermgr_role/powerroledele'
  },
  // 获取权限树
  getFuncTree: {
    dataUrl: rootPath + 'powermgr_role/powerrolemenus'
  },
  // 获取角色权限
  getFuncList: {
    dataUrl: rootPath + 'powermgr_role/powerrolebyid'
  },
  // 登出
  logOut: {
    dataUrl: rootPath + 'powermgr/logout'
  },
  // 主页
  main: {
    dataUrl: rootPath + '/login'
  },
  // 查询用户菜单
  userNav: {
    dataUrl: rootPath + 'powermgr/poweruserfunction'
  },
  // 查询用户菜单
  purchaseOrderItemDetail: {
    dataUrl: rootPath + 'purchase/purchase_order_item_detail'
  },
  //  查询库存列表
  storageList: {
    dataUrl: rootPath + 'stock/list'
  },

  //  采购列表导入采购单
  importPurchaseOrder: {
    dataUrl: rootPath + 'import/purchaseOrder'
  }

};

export default configUrl
