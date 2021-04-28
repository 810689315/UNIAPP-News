<template>
	<view v-if="info!=null">
		<video id="myVideo" :src="info.content_video[0].source_link" :show-center-play-btn="true" :show-play-btn="true"
			controls></video>
		<!-- 介绍 -->
		<view class="video-info" v-if="info.duration">
			<view class="title">{{info.title}}</view>
			<view class="tag">{{info.cate[0]}} / {{info.duration|getTime}}</view>
			<view class="intro">{{info.intro}}</view>
		</view>
		<!-- 作者 -->
		<view class="author" v-if="info.author">
			<view class="avatar">
				<image :src="info.author.profile.avatar" style="width:100%;height:100%;display:block"></image>
			</view>
			<view class="info">
				<view class="username">{{info.author.profile.username}}</view>
				<view class="roles">片中职务：{{info.author.roles}}</view>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="music">
			<view class="title">{{info.relate_video[0].name}}</view>
			<view class="music-items">
				<view class="music-item" v-for="item in info.relate_video[0].list">
					<view class="img" style="width:40vw;height:20vw">
						<!-- <markImg imgSrc="{{item.image}}" postid="{{item.postid}}" catename="{{item.cate[0].catename}}" title="{{item.title}}"
	        duration="{{item.duration*1000}}"></markImg> -->
						<markImg :imgSrc="item.image" :postid="item.postid" :title2="item.title"
							:duration="item.duration|getTime"></markImg>
					</view>
				</view>
			</view>
		</view>
		<!-- 评论 -->
		<view class="comment" v-if="info.comment.list">
			<view class="title">{{info.comment.list.length}}条评论</view>
			<view class="items">
				<view class="item" v-for="item in info.comment.list">
					<view class="item-user">
						<view class="avatar">
							<image :src="item.userinfo.avatar" style="width:100%;height:100%;display:block"></image>
						</view>
						<view class="info">
							<view class="username">{{item.userinfo.username}}</view>
							<view class="time">{{item.addtime|getDate}}</view>
						</view>
					</view>
					<view class="item-comment">{{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import markImg from "../../components/mark-img/mark-img.vue"
	export default {
		data() {
			return {
				info: null
			}
		},
		filters: {
			getTime(n) {
				let min = ((n / 60) > 9 ? (n / 60) : "0" + (n / 60)).toString();
				let sec = ((n % 60) > 9 ? (n % 60) : "0" + (n % 60)).toString();
				return Math.floor(min) + "'" + Math.floor(sec) + "''";
			},
			getDate(d) {
				d = d * 1000
				var time = getDate();
				time = getDate(d)
				var h = time.getHours();
				h = Math.floor(h);
				h = (h > 9 ? h : "0" + h).toString();
				var min = time.getMinutes();
				// console.log(time,h,min,d)
				min = (min > 9 ? min : "0" + min).toString();

				return h + ":" + min;
			}
		},
		methods: {

		},
		components: {
			markImg,
		},
		onLoad: function(options) {
			// console.log(options.query)
			const eventChannel = this.getOpenerEventChannel()
			const that = this;
			// eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
			// eventChannel.emit('someEvent', {data: 'test'});
			// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			eventChannel.on('acceptDataFromOpenerPage', function(data) {
				console.log(data);
				that.info = data.data
			})
		}
	}
</script>

<style>
	#myVideo {
		width: 100%;
	}

	.video-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
	}

	.video-info .title {
		font-size: 32rpx;
		font-weight: bolder;
	}

	.video-info .tag {
		font-size: 22rpx;
		margin: 30rpx 0 40rpx 0;
	}

	.video-info .intro {
		padding: 0 26rpx;
		font-size: 28rpx;
		line-height: 54rpx;
	}

	.author {
		padding-left: 20rpx;
		margin-top: 60rpx;
		display: flex;
		align-items: center;
		height: 150rpx;
		width: 100vw;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}

	.author .avatar {
		width: 80rpx;
		height: 80rpx;
		background-color: #ccc;
		border-radius: 50%;
		overflow: hidden;
	}

	.author .info {
		flex: 1;
		display: flex;
		height: 55%;
		margin-left: 20rpx;
		flex-direction: column;
		justify-content: space-around;
		font-size: 22rpx;
	}

	.author .info .username {
		font-size: 26rpx;
		font-weight: bold;
	}

	.music {
		margin: 40rpx 0;
		padding: 20rpx;
	}

	.music .title,
	.comment .title {
		font-size: 26rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.music .music-items {
		width: 100vw;
		margin-left: -20rpx;
		white-space: nowrap;
		overflow-x: scroll;
	}

	.music .music-items .music-item {
		display: inline-block;
		margin-left: 20rpx;
	}

	.comment {
		border-top: 2rpx solid rgba(0, 0, 0, 0.1);
		padding: 60rpx 20rpx;
	}

	.comment .items .item {
		display: flex;
		flex-direction: column;
		padding: 40rpx 0;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}

	.comment .items .item .item-user {
		display: flex;
	}

	.comment .items .item .item-user .avatar {
		width: 60rpx;
		height: 60rpx;
		background-color: #ccc;
		border-radius: 50%;
		overflow: hidden;
	}

	.comment .items .item .item-user .info {
		flex: 1;
		display: flex;
		margin-left: 20rpx;
		flex-direction: column;
		justify-content: space-around;
		font-size: 20rpx;
		color: rgba(100, 100, 100);
	}

	.comment .items .item .item-user .info .username {
		font-size: 22rpx;
	}

	.comment .items .item-comment {
		font-size: 26rpx;
		color: black;
		padding: 10rpx 0 10rpx 80rpx;
	}
</style>
