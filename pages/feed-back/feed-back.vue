<template>
	<view>
		<view class="feedback-title">意见反馈：</view>
		<view class="feedback-content">
			<textarea class="feedback-textarea" v-model="content" placeholder="请输入您要反馈的问题" />
			</view>
	<view class="feedback-title">反馈图片：</view>
	<view class="feedback-image-box">
		<view class="feedback-image_item" v-for="(item,index) in imgList ">
			<view class="close-icon" @click="del(index)">
				<uni-icons type="closeempty" size="18" color="#fff"></uni-icons>
			</view>
			<view class="image-box">
				<image :src="item.url" mode="aspectFill"></image>
			</view>
		</view>
		
		<view  v-if="imgList.length < 5" class="feedback-image_item" @click="addImg">
			<view class="image-box">
			<uni-icons class="icon-plusempty" type="plusempty" size="50" color="#eee"></uni-icons>
			</view>
		</view>
	</view>
	<button class="button" type="default" @click="submit">意见反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			imgList:[],
			imgName:[],
			content:''
			};
		},
		methods:{
		async submit(){
				// 
				let imagesPath = []
				uni.showLoading()
				for(let i =0; i<this.imgList.length;i++){
					const filePath = this.imgList[i].url
					const filename = this.imgName[i].name
				filePath = await this.uploadFiles(filePath,filename)
				imagesPath.push(filePath)
				}
			
			// console.log(imagesPath)
			this.updateFeedback({
				content:this.content,
				feedbackImages:imagesPath
			})
					
		
			
				
			},
			async uploadFiles(filePath,filename){
				const result = await uniCloud.uploadFile({
					filePath:filePath,
					cloudPath:filename
				})
				console.log(result)
				return result.fileID
			},
			
			del(index){
			this.imgList.splice(index,1)	
			},
			addImg(){
				const _this = this
				const count = 5 - _this.imgList.length
				uni.chooseImage({
					count:count,
					success(res) {
						console.log(res)
						const file_name = res.tempFiles
						const tempfilepaths = res.tempFilePaths
						
						file_name.forEach((item)=>{
							_this.imgName.push({
								name:item.name
							})
						})
						
						tempfilepaths.forEach((item,index)=>{
							// 处理H5多选的状况
							if(index<count){
								_this.imgList.push({
									url:item
								})
							}
						})
					}
				})
			},
			updateFeedback({content,feedbackImages}){
				this.$api.updata_feedback({content,feedbackImages}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:'反馈提交成功',
						icon:'none'
					})
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/tabbar/my/my'
						})
					},2000)
				}).catch(()=>{
					uni.hideLoading()
					uni.showToast({
						title:'反馈提交失败',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style lang="scss">

.feedback-title {
	margin: 15px;
	margin-bottom: 0;
	font-size: 14px;
	color: #666;
}
.feedback-image-box {
	display: flex;
	
	flex-wrap: wrap;
	padding: 10px;
	.feedback-image_item {
		position: relative;
		// 移动端的布局
		width: 33.33%;
		height: 0px;
		padding-bottom: 33.33%;
		box-sizing: border-box;
		.icon-plusempty {
			
		}
		
		.close-icon {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 0;
			top: 0;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			background-color: $uni-base-color;
			color: #fff;
			z-index: 2;
		}
		.image-box {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 5px;
			right: 5px;
			left: 5px;
			bottom: 5px;
			border-radius: 5px;
			border: 1px solid #eee; 
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
.feedback-content {
	margin: 15px;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid #eee;
	.feedback-textarea {
		font-size: 12px;
		width: 100%;
		height: 100px;
	}
}
.button {
	background-color: $uni-base-color;
	padding: 0 15px;
}
</style>
