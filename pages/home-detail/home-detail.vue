<template>
	<view class="detail">
		<view class="detail-title">{{formData.title}}</view>
		<view class="detail-header">
			<view class="detail-header_img">
				<image :src="formData.author.avatar" mode="aspectFit"></image>
			</view>
			<view class="detail-header_content">
				<view class="detail-header_content-title">
					{{formData.author.author_name}}
				</view>
				<view class="detail-header_content-info">
					<text>{{formData.create_time}}</text>
					<text>{{formData.browse_count}}浏览</text>
					<text>{{formData.thumbs_up_count}}赞</text>
				</view>
			</view>
			<button class="detail-header_button" @click="follow(formData.author.id)" type="default">{{formData.is_author_like?'取消关注':'关注'}}</button>

		</view>
		<view class="detail-content">
			<view class="detail-html">
				<u-parse :content="formData.content" :noData="noData"></u-parse>

				
			</view>
			<view class="detail-comment">
				<view class="comment-title">最新评论</view>
				<view class="comment-content" v-for="item in commentList" :key="item.comment_id">
					<comments-box :comments="item" @reply="reply"></comments-box>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom_input" @click="openComments">
				<text>谈谈你的看法</text>
				<uni-icons color="#F07373" type="compose" size="16"></uni-icons>
			</view>
			<view class="detail-bottom_icons">
				<view class="detail-bottom_icons-box" @click="open">
					<uni-icons color="#F07373" type="chat" size="16"></uni-icons>
				</view>
				<view class="detail-bottom_icons-box">
					<uni-icons color="#F07373" @click="likeTop(formData._id)" :type="formData.is_like?'heart-filled':'heart'" size="16"></uni-icons>
				</view>
				<view class="detail-bottom_icons-box">
					<uni-icons color="#F07373" type="hand-thumbsup" size="16"></uni-icons>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<view class="popup-wrap">
				<view class="popup-header">
					<text class="popup-header_item" @click="close">取消</text>
					<text class="popup-header_item" @click="submit">发布</text>
				</view>
				<view class="popup-content">
					<textarea class="popup-textarea" v-model="commentsValue" maxlength="200" fixed="true" placeholder="请输入评论内容" />
					<view class="popup-count">{{commentsValue.length}}/200</view>
			</view>
		</view>
	</uni-popup>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	
	export default {
		data() {
			return {
				formData:{},
				noData:'<p style="color:#666;text-align=center">数据正在加载中...</p>',
				commentsValue:'',
				commentList:[],
				replyFormData:{}
			}
		},
		components:{
			uParse
		},
		methods: {
			// 打开评论
			open(){
				uni.navigateTo({
					url:'../detail-comments/detail-comments?id='+this.formData._id
				})
			},
			// 收藏
			likeTop(article_id){
				this.setUpdataLike(article_id)
				console.log('收藏')
			},
			// 关注
			follow(author_id){
				console.log('关注')
				this.setUpdataAuthor(author_id)
			},
			// 打开评论
			openComments(){
				this.$refs.popup.open()
			},
			// 关闭评论
			close(){
				this.$refs.popup.close()
			},
			submit(){
				console.log('发布')
				if(!this.commentsValue){
					uni.showToast({
						title:'请输入评论内容',
						icon:'none'
					})
					return
				}
				this.setUpdataComment({content:this.commentsValue,...this.replyFormData})
				
			},
			setUpdataComment(content){
				const formdata = {
					article_id:this.formData._id,
					...content
				}
				// console.log(formdata)
				// return
			uni.showLoading()
				this.$api.updata_comment(formdata).then(res=>{
					console.log(res);
					uni.hideLoading()
					uni.showToast({
						title:'评论发布成功'
					})
					this.getComments()
					this.close()
					this.replyFormData = {}
					this.commentsValue = ''
				})
			},
			// 关注作者
			setUpdataAuthor(author_id){
				uni.showLoading()
				this.$api.updata_author({
					author_id
				}).then(res=>{
					uni.hideLoading()
					this.formData.is_author_like = !this.formData.is_author_like
					uni.$emit('update_author')
					uni.showToast({
						title:this.formData.is_author_like?'关注作者成功':'取消关注作者',
						icon:'none'
					})
					console.log(res)
				})
			},
			// 收藏文章
			setUpdataLike(article_id){
				uni.showLoading()
			this.$api.updata_like({
				article_id
			}).then(res=>{
				uni.hideLoading()
				this.formData.is_like = !this.formData.is_like
				uni.$emit('update_article','follow')
				uni.showToast({
					title:this.formData.is_like?'收藏成功':'取消收藏',
					icon:'none'
				})
				// console.log('收藏成功')
			})
			},
			// 获取详情数据
			getDetail(){
				this.$api.get_detail({
					article_id: this.formData._id
				}).then(res=>{
					console.log(res)
					const {data} = res
					this.formData = data
				})
			},
			// 获取评论数据
			getComments(){
				this.$api.get_comments({
					article_id: this.formData._id
				}).then(res=>{
					const {data} = res
					this.commentList = data
					console.log('res',res)
				})
			},
			reply(e){
				this.replyFormData = {
					'comment_id': e.comments.comment_id,
					"is_reply":e.is_reply
				}
				if(e.comments.reply_id){
					this.replyFormData.reply_id = e.comments.reply_id
				}
				this.openComments()
				console.log(this.replyFormData)
			}
		},
		onLoad(query) {
			
			this.formData = JSON.parse(query.params)
			this.getDetail()
			this.getComments()
			// console.log()
		}
		
	}
</script>

<style lang="scss">
	.detail {
		padding: 15px 0;
		padding-bottom: 54px;
	}
.detail-title{
	padding: 0 15px;
	font-size: 18px;
	font-weight: 700;
	color: #333;
}
.detail-header{
	display: flex;
	align-items: center;
	padding: 0 15px;
	margin-top: 10px;
	.detail-header_img {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.detail-header_content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10px;
		font-size: 12px;
		.detail-header_content-title {
			font-size: 14px;
			color: #333;
		}
		.detail-header_content-info {
			color: #999;
			text {
				margin-right: 10px;
			}
		}
	}
	.detail-header_button {
		flex-shrink: 0;
		height: 30px;
		font-size: 12px;
		color: #fff;
		background-color: $uni-base-color;
		
	}
}
.detail-content {
	margin-top: 20px;
	min-height: 500px;
	// border: 1px solid red;
	.detail-html{
		padding: 0 15px;
	}
	.detail-comment{
		margin-top: 30px;
		.comment-title {
			padding: 10px 15px;
			font-size: 14px;
			color: #666;
			border-bottom: 1px solid #f5f5f5;
		}
		.comment-content {
			padding: 0 15px;
			border-top: 1px #eee solid;
		}
	}
}
.detail-bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;
	border-top: 1px #f5f5f5 solid;
	background-color: #fff;
	box-sizing: border-box;
	.detail-bottom_input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 10px;
		padding: 0 10px;
		width: 100%;
		height: 30px;
		border: 1px #ddd solid;
		border-radius: 5rpx;
		text {
			font-size: 14px;
			color: #999;
		}
	}
	.detail-bottom_icons {
		display: flex;
		flex-shrink: 0;
		padding: 0 15px;
		.detail-bottom_icons-box{
			width: 44px;
			display: flex;
			justify-content: center;
		}
	}
}

.popup-wrap {
	background-color: #fff;
	.popup-header {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: #999;
		border-bottom: 1px solid #F5F5F5;
		.popup-header_item {
			height: 40px;
			line-height: 40px;
			padding: 0 15px;
		}
	}
	.popup-content{
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
		.popup-textarea {
			width: 100%;
			height: 200px;
		}
		.popup-count {
			display: flex;
			justify-content: flex-end;
			font-size: 14px;
			color: #666;
		}
	}
}


</style>
