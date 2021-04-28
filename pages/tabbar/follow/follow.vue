<template>
	<view class="follow">
		<!-- 导航切换 -->
		<view class="follow-tab">
			<view class="follow-tab_box">
				<view @click="tab(1)" class="follow-tab_item" :class="{active: activeIndex===1}">作者</view>
				<view @click="tab(0)" class="follow-tab_item" :class="{active: activeIndex===0}">文章</view>
			</view>
		</view>
		<view class="follow-list">
			<swiper class="follow-list_swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<view class="swiper-item">
						<list-scroll>
							<uni-load-more v-if="list.length === 0 && !articleShow" status="loading" iconType="snow"></uni-load-more>
							<list-card types="follow" v-for="item in list " :key="item._id" :item="item"></list-card>
							<view v-if="articleShow" class="no-data">没有更多数据</view>
						</list-scroll>
					</view>
				</swiper-item>
				<swiper-item>
					<list-scroll>
						<list-author v-for="item in listAuthor" :key="item.id" :item="item"></list-author>
					</list-scroll>
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 1,
				list: [],
				listAuthor:[],
				articleShow: false
			}
		},
		onLoad() {
			// 自定义事件只能在页面打开触发
			uni.$on('update_article',()=>{
					this.getFollow()
			})
			uni.$on('update_author',()=>{
				this.getAuthor()
			})
		this.getFollow()
		this.getAuthor()
		},
		methods: {
			change(e){
				this.activeIndex = e.detail.current
				// console.log(e)
			},
			tab(index) {
				this.activeIndex = index
			},
			getFollow() {
				this.$api.get_follow().then(res => {
					const {
						data
					} = res
					this.list = data
					this.articleShow = this.list.length === 0 ? true : false;
					console.log(res)
				})
			},
			getAuthor(){
				this.$api.get_author().then(res=>{
					let {data} = res
					const arrMap = new Map();
					let newData = data.filter((data) => !arrMap.has(data.id) && arrMap.set(data.id, 1))
					this.listAuthor = newData
					console.log(newData)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;

	}

	.follow {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		// border: 1px red solid;
		box-sizing: border-box;

		.follow-tab {
			height: 30px;
			padding: 10px 20px;
			border-bottom: 1px solid #f5f5f5;

			.follow-tab_box {
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px solid $uni-base-color;

				.follow-tab_item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					color: #666;
					font-size: 14px;

					&:first-child {
						border-right: 1px solid $uni-base-color;
					}

				}

				.active {
					color: $uni-base-color;
				}
			}
		}

		.follow-list {
			flex: 1;

			// border: 1px solid red;
			.follow-list_swiper {
				height: 100%;

				.swiper-item {
					height: 100%;
				}
			}

		}
	}
	.no-data {
		padding: 50px;
		font-size: 14px;
		color: #666;
		text-align: center;
	}
</style>
