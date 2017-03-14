<template>
	<div class="inventory_details">
		<!--title-->
		<pos-head title="库存详情"></pos-head>
		
		<!-- head -->
		<inventory-details-head></inventory-details-head>

		<!-- 出入库明细 -->
		<inventory-details-grid></inventory-details-grid>

		<!-- 商品所在仓库 -->
		<inventory-details-warehouse></inventory-details-warehouse>
		
	</div>
</template>

<style lang="less">
.inventory_details{
	padding-top: 50px;
}
</style>

<script>
import { 
	PosHead,
	InventoryDetailsHead,
	InventoryDetailsGrid,
	InventoryDetailsWarehouse
} from '../../components'

export default {
	components: {
		PosHead,
		InventoryDetailsHead,
		InventoryDetailsGrid,
		InventoryDetailsWarehouse
	}
}
</script>