let devRootPath = 'http://192.168.16.210:9080/qc-invoicing/';
let proRootPath = 'http://eoms.17cai.com:8081/qc-invoicing/';
let rootPath = process.env.NODE_ENV === "production" ? proRootPath : devRootPath;
let imgPath = process.env.NODE_ENV === "production" ? "http://jl.17cai.com/static/img/" : "http://127.0.0.1/static/img/";
const configUrl = {
  imgPath,
  //	选择工作地址
  productList: {
    dataUrl: rootPath + 'product/getProductList'
  },
};

export default configUrl
