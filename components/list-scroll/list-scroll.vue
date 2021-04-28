<template>
	<view class="scroll">
			   <scroll-view scroll-y  @scrolltolower="loadMore" class="scroll-item" >
			   	<view>
					<slot></slot>
				</view>
			   </scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			loadMore(){
				this.$emit('loadMore')
			}
		}
	}
</script>

<style lang="scss">
 .scroll{
	 height: 100%;
		 flex: 1;
		 overflow: hidden;
		 box-sizing: border-box;
		 .scroll-item {
			 display: flex;
			 height: 100%;
			 flex-direction: column;
			 
		 }
	 }
</style>
