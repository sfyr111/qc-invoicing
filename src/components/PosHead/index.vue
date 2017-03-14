<template>
	<div class="pos_head">{{ title }}</div>
</template>

<style lang="less">
.pos_head{
	width: 100%;
	line-height: 40px;
	background: #242f42;
	color: #fff;
	z-index: 10;
	font-size: 15px;
	position: fixed;
	top: 70px;
	left: 250px;
	padding: 0 20px;
}
</style>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	}
}
</script>