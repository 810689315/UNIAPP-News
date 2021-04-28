<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view class="listcard" v-if="item.mode === 'base'">

			<view class="listcard_img">
				<!-- <image :src="item.cover[1]" mode="aspectFill"></image> -->
				<image :src="item.cover[5]" mode="aspectFill"></image>
			</view>

			<view class="listcard_content">

				<view class="listcard_title">
					<text>{{item.title}}</text>
					<likes :types="types" :item="item"></likes>
				</view>

				<view class="listcard_des">
					<view class="listcard_des_label">
						<view class="listcard_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>

		<!-- 多图布局 -->
		<view class="listcard  mode-column" v-if="item.mode === 'column'">


			<view class="listcard_content">

				<view class="listcard_title">
					<text>{{item.title}}</text>
					<likes  :types="types" :item="item"></likes>
				</view>


				<view class="listcard_img">
					<view class="listcard_img_item" v-for="(itemIn,index) in imgIndex" :key="index">
						<image :src="itemIn" mode="aspectFill"></image>
					</view>
				</view>



				<view class="listcard_des">
					<view class="listcard_des_label">
						<view class="listcard_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>


		<!-- 大图模式 -->
		<view class="listcard  mode-img" v-if="item.mode === 'image'">
			<!-- 图片布局 -->
			<view class="listcard_img">

				<image :src="item.cover[0]" mode="aspectFill"></image>

			</view>
			<!-- 内容布局 -->
			<view class="listcard_content">
				<!-- 文字标题 -->
				<view class="listcard_title">
					<text>{{item.title}}</text>
					<likes :types="types" :item="item"></likes>
				</view>

				<!-- 内容描述 -->
				<view class="listcard_des">
					<view class="listcard_des_label">
						<view class="listcard_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {

			item: {
				type: Object,
				default () {
					return {}
				}
			},
			types: {
				type: String,
				default: ''

			}
		},
		data() {
			return {

			};
		},
		computed: {
			imgIndex() {

				// console.log(this.item.cover.slice(0,3))
				return this.item.cover.slice(0, 3)
			}
		},
		methods: {
			open() {
				const item = this.item
				this.$emit('click', item)
				const params = {
					_id: item._id,
					title: item.title,
					author: item.author,
					create_time: item.create_time,
					thumbs_up_count: item.thumbs_up_count,
					browse_count: item.browse_count

				}
				console.log(params)
				uni.navigateTo({
					url: '/pages/home-detail/home-detail?params=' + JSON.stringify(params)
				})
			}
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;

		.listcard_img {

			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.listcard_content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.listcard_title {
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;

				text {
					// 多行文本溢出
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;

					// 单行文本溢出
					// display: inline-block;
					// width: 255px;
					// overflow: hidden;
					// text-overflow: ellipsis;
					// white-space: nowrap;
				}


			}

			.listcard_des {
				display: flex;

				justify-content: space-between;
				font-size: 12px;

				.listcard_des_label {
					display: flex;

					.listcard_des_label_item {
						padding: 1px 5px;
						margin-right: 5px;
						border-radius: 15px;
						border: 1px solid $uni-base-color;
					}

				}

				.listcard_des_browse {
					color: #999;
					line-height: 1.5;
				}
			}
		}

		&.mode-column {
			.listcard_content {
				width: 100%;
				padding-left: 0;

				.listcard_des {
					margin-top: 10px;
				}
			}

			.listcard_img {
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;

				.listcard_img_item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;

					&:first-child {
						margin-left: 0;
					}

					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		&.mode-img {
			flex-direction: column;

			.listcard_img {
				width: 100%;
				height: 100px;

			}

			.listcard_content {
				margin-top: 10px;

				.listcard_des {
					margin-top: 10px;
				}
			}
		}
	}
</style>
