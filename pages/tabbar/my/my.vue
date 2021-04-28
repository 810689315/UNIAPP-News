<template>
	<view>

		<view class="my-header">
			<view class="my-header_back-image">
				<image :src="userinfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my-header_logo">
				<view class="my-header_logo-image">
					<image :src="userinfo.avatar" mode="aspectFill"></image>
				</view>
				<text class="my-header_name">{{userinfo.author_name}}</text>
			</view>

			<view class="my-header_info">
				<view class="my-header_info-box">
					<text class="my-header_info-title">关注</text>
					<text>{{userinfo.follow_count}}</text>
				</view>

				<view class="my-header_info-box">
					<text class="my-header_info-title">粉丝</text>
					<text>{{userinfo.fans_count}}</text>
				</view>

				<view class="my-header_info-box">
					<text class="my-header_info-title">积分</text>
					<text>{{userinfo.integral_count || 0}}</text>
				</view>
			</view>
		</view>
		<view class="my-content">
			<view class="my-content_list" @click="open">
				<view class="my-content_list-title">
					<uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
					<text>我的文章</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>

			<view class="my-content_list" @click="feedBack">
				<view class="my-content_list-title">
					<uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		methods: {
			open() {
				uni.navigateTo({
					url: '/pages/my-article/my-article'
				})
			},
			feedBack() {
				uni.navigateTo({
					url: '/pages/feed-back/feed-back'
				})
			}
		},
		onLoad() {
			// console.log(this.userinfo)
		},
		computed: {
			...mapState(['userinfo'])
		},

	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.my-header {
		position: relative;
		// background-color: red;
		padding-bottom: 15px;

		.my-header_back-image {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			filter: blur(8px);
			opacity: 0.3;

			image {
				width: 100%;
				height: 100%;
			}

		}

		.my-header_logo {
			padding-top: 20px;
			// background-color: pink;
			display: flex;
			flex-direction: column;
			align-items: center;

			.my-header_logo-image {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;

				}
			}

			.my-header_name {
				color: #000;
				font-size: 22px;
				margin-top: 20px;
			}
		}

		.my-header_info {
			display: flex;
			margin-top: 10px;

			.my-header_info-box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				color: #999;
				font-size: 12px;

				.my-header_info-title {
					font-size: 14px;
					color: #333;
					padding-bottom: 5px;
				}

			}
		}
	}

	.my-content {
		.my-content_list {
			display: flex;
			justify-content: space-between;
			padding: 15px 15px;
			margin-bottom: 10px;
			background-color: #ffff;
			font-size: 14px;
			color: #333;

			.my-content_list-title {
				display: flex;
				align-items: center;

				.icons {
					margin-right: 5px;
				}
			}
		}
	}
</style>
