<template>
	<view class="comment-box">
		<view class="comments-header">
			<view class="comments-header_logo">
				<image :src="comments.author.avatar" mode="aspectFill"></image>
			</view>
			<view class="comments-header_info">
				<view v-if="!comments.is_reply" class="title">{{comments.author.author_name}}</view>
				<view v-else class="title">{{comments.author.author_name}} 
					<text class="reply-text">回复</text>{{comments.to}}
					</view>
				<view>{{comments.create_time | formatTime}}</view>
			</view>
		</view>
		<view class="comments-content">
			<view>{{comments.comment_content}}</view>
			<view class="comments-info">
				<view class="comments-button" @click="commentsReply({comments:comments,is_reply:reply})">回复</view>
			</view>
			<view class="comments-reply" v-for="item in comments.replys" :key="item.comment_id">
				<comments-box @reply="commentsReply" :reply="true" :comments="item"></comments-box>
			</view>
		</view>
	
	</view>
</template>

<script>
	import commentsBox from '@/components/comments-box/comments-box.vue'
	import {parseTime} from '@/utils/index.js'
	export default {
	name:"commentsBox",
		props:{
			comments:{
				type:Object,
				default(){
					return {}
				}
			},
			reply:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				
			};
		},
		filters:{
			formatTime(time){
				return parseTime(time)
			}
		},
		components:{
			commentsBox
		},
		methods:{
			commentsReply(comment){
				// 为了区分主回复还是子回复
				if(comment.is_reply){
					comment.comments.reply_id = comment.comments.comment_id
					comment.comments.comment_id = this.comments.comment_id
					
				}
				this.$emit('reply',comment)
			}
		}
	}
</script>

<style lang="scss">
.comment-box {
	margin: 15px 0;
	.comments-header{
		display: flex;
		.comments-header_logo {
		   flex-shrink: 0;
			width: 30px;
			height: 30px;
			border-radius: 5px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.comments-header_info{
			display: flex;
			flex-direction: column;
			padding-left: 15px;
			font-size: 12px;
			color: #999;
			line-height: 1;
			.title{
				color: #333;
				font-size: 14px;
				margin-bottom: 10px;
				.reply-text {
					margin: 0 10px;
					font-weight: bold;
					color: #000;
				}
			}
		}
	}
	.comments-content {
		color: #000;
		font-size: 14px;
		margin-top: 10px;
		.comments-info {
			margin-top: 15px;
			display: flex;
			.comments-button {
				padding: 2px 10px;
				font-size: 12px;
				color: #999;
				border: 1px #ccc solid;
				border-radius: 20px;
			}
		}
		.comments-reply {
			display:  flex;
			margin: 15px 0 ;
			padding: 0 10px;
			border: 1px #eee solid;
		}
	}
}
</style>
