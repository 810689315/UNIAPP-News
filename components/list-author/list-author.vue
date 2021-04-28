<template>
	<view class="list-author">
		<view class="list-author_image">
			<image :src="item.avatar"></image>
		</view>
		<view class="list-author_content">
			<view class="list-author_content-title">{{item.author_name}}</view>
			<view class="list-author_content-des">
				<view class="list-author_content-label">
					{{item.professional}}
				</view>
				<view class="list-author_content-info">
					<text>发帖 {{item.article_ids.length}}</text>
					<text>粉丝数 {{item.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-author {
		display: flex;
		padding: 10px 0;
		margin: 0 10px;
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;

		.list-author_image {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.list-author_content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			padding-left: 10px;
			.list-author_content-title {
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
			
			}
				.list-author_content-des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.list-author_content-label {
				color: #666;	
				}
				.list-author_content-info {
					color: #999;
					line-height: 1.5;
					text:first-child {
						margin-right: 10px;
					}
				}
				
			}
		}


	}
</style>
