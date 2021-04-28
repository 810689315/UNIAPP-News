<template>
	<view v-if="posts.length!=0">
		<view v-for="post in posts">
			<view v-for="item in post.list" class="video-card">
				<MarkImg :imgSrc="item.image" :catename="item.cates[0].catename" :postid="item.postid"
					:title="item.title" :duration="item.duration"></MarkImg>
			</view>
		</view>
	</view>
</template>

<script>
	import MarkImg from "../../../components/mark-img/mark-img.vue"
	export default {
		data() {
			return {
				posts: [],
				startTime: 0,
			}
		},
		methods: {},
		onShow() {
			console.log("video show");
			uni.request({
				url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/index',
				success: (res) => {
					// console.log(res.data.data.hot);
					// console.log(list);
					this.posts = [...this.posts, res.data.data.posts];
					console.log(this.posts);
				}
			})
		},
		onReachBottom() {
			const length = this.posts.length - 1;
			if ((Date.now() - this.startTime) > 3000 && (this.posts.length - 1) == length) {
				uni.request({
					url: "https://api.kele8.cn/agent/" + this.posts[length].next_page_url_full,
					success: (res) => {
						console.log(res.data.data);
						this.posts = [...this.posts, res.data.data]
						console.log(this.posts);
					}
				})
			}
			this.startTime = Date.now();
		},
		components: {
			MarkImg,
		}
	}
</script>

<style>
	.video-card {
		width: 750rpx;
		height: 450rpx;
		position: relative;
	}
</style>
