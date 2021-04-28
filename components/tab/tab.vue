<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll" >
			<view class="tab-scroll_box">
				<view class="tab-scroll_item" :class="{active: currentInex == index}" @click="clickTab(item,index)" v-for="(item,index) in list" :key="index">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icon" @click="open">
			<uni-icons type="gear" color="#666" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				currentInex:0
			}
		},
		// 可以监听 data props 值得变化
		watch:{
			tabIndex(newl){
				this.currentInex = newl
			}
		},
		methods: {
		clickTab(item,index){
			
				this.currentInex = index
				this.$emit('tab',{
					data:item,
					index:index
				})
			
		},
		open(){
			uni.navigateTo({
				url:"/pages/home-label/home-label"
			})
		}
			
		}
	}
</script>

<style lang="scss">
.tab {
	display: flex;
	width: 100%;
	border: 1px solid #f5f5f5;
	box-sizing: border-box;
	background-color: #fff;
	
	.tab-scroll{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.tab-scroll_box {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 45px;
			box-sizing: border-box;
			.tab-scroll_item {
				flex-shrink: 0;
				font-size: 14px;
				color: #333;
				padding: 0 10px;
				&.active {
					color: $uni-base-color;
				}
			}
		}
	}
	
	.tab-icon {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 45px;
		&::after{
			content: '';
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background-color: #ddd;
		}
	}
}
</style>
