<template>
	<view class="img" @click="playVideo">
		<view class="mark"></view>
		<image :src="imgSrc" style="width:100%;height:100%;display:block" mode="aspectFill"></image>
		<view class="info one-text" v-if="title">
			<view class="tag">{{catename}} / {{duration|getTime1}}</view>
			<text class="title">{{title}}</text>
		</view>
		<view class="info2 one-text" v-if="title2">
			<view class="tag2">{{duration}}</view>
			<text class="title2">{{title2}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "mark-img",
		props: ['imgSrc', 'title', 'catename', 'title2', 'duration','postid'],
		data() {
			return {

			};
		},
		filters: {
			getTime1(n) {
				let min = ((n / 60) > 9 ? (n / 60) : "0" + (n / 60)).toString();
				let sec = ((n % 60) > 9 ? (n % 60) : "0" + (n % 60)).toString();
				return Math.floor(min) + "'" + Math.floor(sec) + "''";
			}
		},
		methods: {
			playVideo() {
				let postid = this.postid;
				let videoInfo = null;
				uni.navigateTo({
					url: '/pages/video-view/video-view',
					events: {
						// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
						acceptDataFromOpenedPage: function(data) {
							console.log(data)
						},
						someEvent: function(data) {
							console.log(data)
						}
					},
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						// https://app.vmovier.com/apiv3/post/getPostInCate?p=1&size=10&cateid=
						uni.request({
							url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid=' +
								postid,
							success: (data) => {
								videoInfo = data.data.data;
								res.eventChannel.emit('acceptDataFromOpenerPage', {
									data: videoInfo
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.img {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.mark {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	.info {
		position: absolute;
		z-index: 11;
		bottom: 24rpx;
		padding: 0 24rpx;
		color: white;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.info .tag {
		font-size: 24rpx;
		margin-bottom: 16rpx;
	}

	.info .title {
		font-size: 32rpx;
		font-weight: 600;
		width: 100%;
	}

	.info2 {
		z-index: 11;
		position: absolute;
		bottom: 10rpx;
		padding: 0 10rpx;
		color: white;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	.info2 .tag2 {
		font-size: 22rpx;
	}

	.info2 .title2 {
		font-size: 22rpx;
		width: 100%;
	}

	.one-text {
		/* width: 100%; */
		overflow: hidden;
		/*超出部分隐藏*/
		white-space: nowrap;
		/*不换行*/
		text-overflow: ellipsis;
		/*超出部分省略号显示*/
	}
</style>
