<template>
  <div class="store_input">
    <!-- 查询条件 -->
    <store-input-head></store-input-head>

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
		viewDetials () {
			this.$router.push({
				name: 'storageInputDetails'
			})
		}
	}
}
</script>
