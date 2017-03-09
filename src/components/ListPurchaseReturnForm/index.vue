<template>
	<div class="list_puchase_form">
		<el-form ref="form" :model="form" label-width="100px">
		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="退货单号:">
		    	    <el-input v-model="form.name"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="供应商：">
		    	    <el-input v-model="form.proName"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="审核状态：">
			    	<el-select v-model="form.NO_one_type" placeholder="">
	    	      <el-option label="全部" value="0"></el-option>
	    	      <el-option label="待审核" value="1"></el-option>
	    	      <el-option label="未通过" value="2"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="制单人：">
			    	<el-select v-model="form.NO_one_type" placeholder="">
			    		<el-option label="全部" value="0"></el-option>
	    	      <el-option label="已入库" value="1"></el-option>
	    	      <el-option label="未入库" value="2"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>
		  </el-row>

  	  <el-row :gutter="20">
  	    <el-col :span="6">
  	    	<el-form-item label="出库状态：">
  		    	<el-select v-model="form.NO_one_type" placeholder="">
      	      <el-option label="全部" value="shanghai"></el-option>
      	      <el-option label="未请款" value="beijing"></el-option>
      	      <el-option label="已付款" value="shanghai"></el-option>
      	      <el-option label="待付款" value="beijing"></el-option>
      	    </el-select>
      	  </el-form-item>
  	    </el-col>

  	    <el-col :span="4">
  	    	<el-form-item label="退款状态：">
  		    	<el-select v-model="form.NO_one_type" placeholder="">
      	      <el-option label="待退款" value="1"></el-option>
      	      <el-option label="已退款" value="2"></el-option>
      	    </el-select>
      	  </el-form-item>
  	    </el-col>

  	    <el-col :span="8">&nbsp;</el-col>


  	    <el-col :span="6" class="btn">
  	    	  <el-button type="primary" @click="onSubmit">查询</el-button>
  	    	  <el-button type="info" @click="addReturnOrder">新建退货单</el-button>
  	    </el-col>
  	  </el-row>
		</el-form>
	</div>
</template>

<style lang="less">
.list_puchase_form {
	.btn{
		text-align: right;
	}
	.btn button:first-child{
		margin-right: 20px;
	}
}
</style>

<script>
export default {
	data () {
		return {
			form: {
				proNum: '',			//商品编码
				proName: '',		//	商品名称
				NO_one_type: '',		// 一级分类
				NO_two_type: '',		// 二级分类
				invRangeStart: '',		//	库存范围  开始
				invRangeEnd: '',			//	结束
				proSKU: '',						//	商品SKU
			},
			pickerOptions1: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }
        ]					//		日历开始日期
			},
			pickerOptions2: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }
        ]					//		日历开始日期					//	结束日期
			},
			startDate: '',
			endDate: ''
		}
	},

	methods: {
		//	查询
		onSubmit () {
			console.log(this.form)
		},

    //  新建退货单
    addReturnOrder  () {
      this.$emit('add-return-order')
    }
	}
}
</script>