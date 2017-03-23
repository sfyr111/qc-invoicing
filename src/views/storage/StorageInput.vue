<template>
  <div class="store_input">
    <!-- 查询条件 -->
    <store-input-head @add-order="addOrder"></store-input-head>

    <!-- tab -->
    <store-input-grid @view-details="viewDetials"></store-input-grid>
  </div>
</template>

<script>
import {
	StoreInputHead,
	StoreInputGrid
} from '../../components'

export default {
	components: {
		StoreInputHead,
		StoreInputGrid
	},

	methods: {
		//	查看详情
		viewDetials () {
			this.$router.push({
				name: 'storageInputDetails'
			})
		},

		//	新建入库单
		addOrder () {
			this.$router.push({
				name: 'addStorageInput'
			})
		}
	}
}
</script>
