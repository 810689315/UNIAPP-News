<template>
	<view class="list_item">
		<list-scroll class="list-scroll" @loadMore='loadMore'>
				    <list-card mode = "base":item = "item" v-for="(item,index) in list1" :key="index"></list-card>
				  <uni-load-more v-if="list1.length===0 || list1.length>9" iconType="snow" :status="load.loading || 'loading' "></uni-load-more>
		</list-scroll>
	</view>
</template>

<script>
	export default  {
		props:{
			list1:{
				type:Array,
				default(){
					return []
				}
			},
			load:{
				type:Object,
				default(){
					return {
						loading:'loading'
					}
				}
			}
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang="scss">
	.list_item {
		height: 100%;
		.list-scroll {
			height: 100%;
		}
	}
	
</style>
