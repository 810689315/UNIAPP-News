<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight +'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" @click="open" :class="{search:isSearch}" :style="{height: navBarHeight+'px',width: windowWidth+'px'}">
				<view v-if="isSearch" @click="back" class="navbar-content_search-icon">
					<uni-icons type="back" color="#fff" size="20"></uni-icons>
				</view>
				<!--非搜索页显示  -->
				<view v-if="!isSearch" class="navbar-search">
					<view  class="navbar-search_icon">
						<uni-icons type="search" size="20" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uniapp vue react</view>
				</view>
				<!-- 搜索也显示 -->
				<view v-else class="navbar-search">
					<input class="input_search" type="text" value="test" v-model="val" @input="inputChange" placeholder="请输入您要搜索的内容" />
				</view>
				
			</view>
			
		</view>
		
		
		<view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		props:{
			isSearch:{
				type:Boolean,
				default:false
			},
			value:{
				type:[String,Number],
				default:''
			}
		},
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:40,
				windowWidth:375,
				val:''
			};
		},
		created() {
			// 设置手机信息
			const info = uni.getSystemInfoSync()
			this.windowWidth = info.windowWidth
			// 获取状态栏的高度
			this.statusBarHeight = info.statusBarHeight
			// 获取胶囊的位置
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// console.log(menuButtonInfo)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight)+(menuButtonInfo.top - info.statusBarHeight)
			// console.log(navBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
		},
		watch:{
			value(newVal){
				this.val = newVal
			}
		},
		methods:{
			back(){
				// uni.navigateBack()
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			},
			open(){
				if(this.isSearch)return
				uni.navigateTo({
					url:'/pages/home-search/home-search'
				})
				
			},
			inputChange(e){
		   const {value} = e.detail
				// console.log(value)
				this.$emit('input',value)
			}
		}
	}
</script>

<style lang="scss">
.navbar{
	.navbar-fixed{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		background-color: rgb(240,118,118);
	.navbar-content{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		padding: 0 15px;
		box-sizing: border-box;
		.navbar-search {
				
				display: flex;
				align-items: center;
				width: 100%;
				height: 30px;
				border-radius: 30px;
				padding: 0 10px;
				background-color: #fff;
				.navbar-search_icon {
					
					margin-right: 10px;
				}
				
				.navbar-search_text {
					width: 100%;
					font-size: 12px;
					color: #999;
				}
			}
			&.search{
				padding-left: 0px;
				.navbar-content_search-icon {
					margin-left: 10px;
					margin-right: 10px;
				}
				.navbar-search{
					border-radius: 5px;
				
					.input_search {
						width: 100%;
					}
				}
			}
		}

	}
		

	
}
</style>
