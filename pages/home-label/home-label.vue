<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">
					我的标签
				</view>
				<view class="label-edit" @click="editLabel">
					{{is_edit?'完成':'编辑'}}
				</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view   v-if="!loading"  class="label-content">
				<view class="label-content_item" :key="item._id" v-for="(item,index) in labelList">
					{{item.name}}
				<uni-icons v-if="is_edit" @click="del(index)" class="icons-close" type="clear" color="red" size="20"></uni-icons>
				</view>
				<view v-if="labelList.length === 0 && !loading" class="no-data">
					没有更多的数据
				</view>
			</view>
		</view>
		
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">
					标签管理
				</view>
				
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content_item" @click="add(index)" :key="item._id" v-for="(item,index) in list">
					{{item.name}}
				</view>
				<view v-if="list.length === 0 && !loading" class="no-data">
					没有更多的数据
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit:false,
				labelList:[],
				list:[],
				loading:true
			};
		},
		onLoad() {
			this.getLabel()
		},
		methods:{
			editLabel(){
				if(this.is_edit){
					this.is_edit = false
					this.setUpdateLabel(this.labelList)
				}else{
					this.is_edit = true
				}
			},
			setUpdateLabel(label){
				let newArrIds = []
				label.forEach(item=>{
					newArrIds.push(item._id)
				})
				uni.showLoading()
				console.log(newArrIds)
				this.$api.updata_label({
					label:newArrIds
				}).then(res=> {
					uni.hideLoading()
					uni.showToast({
						title:'数据更新成功',
						icon:'none'
					})
					uni.$emit('labelChange')
				})
			},
			getLabel(){
				this.$api.get_label({type:'all'}).then((res)=>{
					const {data} = res
					console.log(data)
					this.labelList = data.filter(item=> item.current)
					let arr = data.filter(item=>!item.current)
					const arrMap = new Map();
					let newData = arr.filter((data) => !arrMap.has(data.name) && arrMap.set(data.name, 1));
					this.list = newData;
					this.loading = false
				})
			},
			add(index){
				if(!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index,1)
			},
			del(index){
				this.list.push(this.labelList[index])
				this.labelList.splice(index,1)
			}
		}
	}
</script>

<style lang="scss">

page{
	background-color: #f5f5f5;
}
.label {
	.label-box{
		background-color: #fff;
		margin-bottom: 10px;
		.label-header {
			display: flex;
			justify-content: space-between;
			padding: 10px 15px;
			font-size: 14px;
			color: #666;
			border-bottom: 1px #f5f5f5 solid;
			.label-edit {
				color: #30b33a;
				font-weight: bold;
			}
		}
		.label-content {
			display: flex;
			flex-wrap: wrap;
			padding: 15px;
			padding-top: 0px;
			.label-content_item {
				position: relative;
				padding: 2px 5px ;
				margin-top: 12px;
				margin-right: 10px;
				border: 1px solid #666;
				border-radius: 5px;
				font-size: 14px;
				color: #666;
				.icons-close{
					position: absolute;
					top: -8px;
					right: -8px;
					background-color: #fff;
					border-radius: 50%;
				}
			}
		}
	}
}
.no-data{
	width: 100%;
	text-align: center;
	font-size: 16px;
	color: #999;
	padding: 50px 0;
}
</style>
