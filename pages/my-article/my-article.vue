<template>
	<view>
		<uni-load-more status="loading"  v-if="lists.length === 0"></uni-load-more>
		<list-card v-for="item in lists" :key="item._id" :item="item"></list-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[]
			};
		},
		methods:{
			getMyArticle(){
				this.$api.get_my_article().then(res=>{
					const {data} = res
					const arrMap = new Map();
					let newData = data.filter((data) => !arrMap.has(data.id) && arrMap.set(data.id, 1))
					this.lists = newData
				})
			}
		},
		onLoad() {
			this.getMyArticle()
		}
	}
</script>

<style lang="scss">

</style>
