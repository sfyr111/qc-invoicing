let devRootPath = 'http://192.168.16.172:8080/qc-invoicing/';
let proRootPath = 'http://eoms.17cai.com:8081/qc-invoicing/';
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
  // 修改产品
  productEdit: {
    dataUrl: rootPath + 'product/updateProduct'
  },
  // 查看商品
  productDetail: {
    dataUrl: rootPath + 'product/getProductDetail'
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
  }
};

export default configUrl
