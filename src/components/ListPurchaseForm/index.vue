<template>
	<div class="list_puchase_form">
		<el-form ref="form" :model="form" label-width="100px">
		  <el-row :gutter="20">
		    <el-col :span="6">
		    	<el-form-item label="采购单号:">
		    	    <el-input v-model="form.serialNumber"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="供应商：">
		    	    <el-input v-model="form.supplierName"></el-input>
		    	</el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="审核状态：">
			    	<el-select v-model="form.flowStatus" placeholder="">
              <el-option label="全部" value=""></el-option>
	    	      <el-option label="待审核" value="1"></el-option>
	    	      <el-option label="审核通过" value="2"></el-option>
	    	      <el-option label="未通过" value="3"></el-option>
              <el-option label="废弃" value="4"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>

		    <el-col :span="6">
		    	<el-form-item label="入库状态：">
			    	<el-select v-model="form.inStatus" placeholder="">
              <el-option label="全部" value=""></el-option>
			    		<el-option label="未入库" value="1"></el-option>
	    	      <el-option label="已入库" value="3"></el-option>
	    	    </el-select>
	    	  </el-form-item>
		    </el-col>
		  </el-row>

  	  <el-row :gutter="20">
  	    <el-col :span="6">
  	    	<el-form-item label="付款状态：">
  		    	<el-select v-model="form.payStatus" placeholder="">
              <el-option label="全部" value=""></el-option>
      	      <el-option label="未请款" value="1"></el-option>
              <el-option label="待付款" value="2"></el-option>
      	      <el-option label="已付款" value="3"></el-option>
      	    </el-select>
      	  </el-form-item>
  	    </el-col>

  	    <el-col :span="8">
  	    	<el-form-item label="建单时间：">
  	    	   <el-col :span="11">
  	    	     <el-date-picker
    	           v-model="form.startDate"
    	           type="datetime"
    	           placeholder="/年/月/日"
    	           align="right"
    	           :picker-options="pickerOptions1">
  	    	      </el-date-picker>
  	    	   </el-col>
  	    	   <el-col class="line" :span="2">-</el-col>
  	    	   <el-col :span="11">
   	    	     <el-date-picker
     	           v-model="form.endDate"
     	           type="datetime"
     	           placeholder="/年/月/日"
     	           align="right"
     	           :picker-options="pickerOptions2">
   	    	      </el-date-picker>
  	    	   </el-col>
  	    	 </el-form-item>
  	    </el-col>
  	    <el-col :span="4">
  	    	<el-form-item label="制单人：">
            <el-input v-model="form.creator"></el-input>
      	  </el-form-item>
  	    </el-col>
  	    <el-col :span="6" class="btn">
  	    	  <el-button type="primary" @click="onSubmit">查询</el-button>
  	    	  <el-button type="info" @click="addPurchaseOrder">新建采购单</el-button>
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
import util from '../../utils/util'
export default {
	data () {
		return {
			form: {
				serialNumber: '',			      //  采购单号
				supplierName: '',		       //	供应商名称
				flowStatus: '',		         // 审核状态 1.待审核 2.审核通过 3.未通过 4.废弃
				inStatus: '',		           // 入库状态 1.未入库 3.已入库
				payStatus: '',		        //	付款状态 1.未情况 2.待付款 3.已付款
				startDate: '',            //  建单开始日期
        endDate: '',               //  建单结束日期
        creator: '',               // 制单人
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
		}
	},

	methods: {
		//	查询
		onSubmit () {
      //  选择结束日期比开始日期小 则相反对调
      if (this.form.startDate && this.form.endDate) {
        if (+new Date(this.form.endDate) < +new Date(this.form.startDate)) {
          this.date = this.form.startDate
          this.form.startDate = this.form.endDate
          this.form.endDate = this.date
        }
      }
      //  如果日期不为空
      if (this.form.startDate) {
        this.form.startDate = util.getDateStr(this.form.startDate)
      }

      if (this.form.endDate) {
        this.form.endDate = util.getDateStr(this.form.endDate)
      }

      this.$emit('on-check', this.form)
		},

    //  新增采购单
    addPurchaseOrder () {
      this.$emit('add-purchase-order')
    }
	}
}
</script>