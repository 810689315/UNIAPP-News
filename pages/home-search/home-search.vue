 <template>
	<view class="home">
		<navbar :isSearch="true" v-model="value" @input= "change"></navbar>
		<view class="home-list">
			<view v-if="is_history"  class="label-box">
				<view class="label-header">
					<text class="label-title">搜素历史</text>
					<text @click="clear" class="label-clear">清空</text>
				</view>
				<view v-if="historyLists.length > 0" class="label-content">
					<view @click="openHistory(item)" class="label-content_item" v-for="item in historyLists">
						{{item.name}}
					</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
			</view>
			
			<list-scroll v-else class="list-scroll" >
				<uni-load-more v-if="loading" iconType="snow" status="loading"></uni-load-more>
					    <view v-if="searchList.length>0" class="">
					    	<list-card :item = "item" @click="setHistory" v-for="(item,index) in searchList" :key="index"></list-card>
					    </view>
						<view v-if="searchList.length === 0 && !loading" class="no-datas">
							没有搜索到相关的数据
						</view>
					 
			</list-scroll>
			
			<!-- <button type="default" @click="testBtn">添加数据</button> -->
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				// historyList:{}
				is_history:true,
				searchList:[],
				value:'',
				loading:false
			};
		},
		onLoad() {
			// this.getList()
		},
		methods:{
			clear(){
				this.$store.dispatch('clearHistory')
				uni.showToast({
					title:'清空完成'
				})
			},
			setHistory(){
				
					this.$store.dispatch('set_history',{
						name:this.value
					})
			},
			openHistory(item){
				this.value = item.name
				this.getSearch(this.value)
			},
			change(value){
				// console.log("需要接收的",value)
				// this.getList()
				// this.value = value
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				if(!this.mark){
					this.mark = true
					this.timer = setTimeout(()=>{
						this.mark = false
						this.getSearch(value)
					},1000)
				}
			},
			// testBtn(){
			// 	this.$store.dispatch('set_history',{
			// 		name:'test'
			// 	})
			// },
			getSearch(value){
				if(!value){
					this.is_history = true
					this.searchList = []
					return
				}
				this.is_history = false
				this.loading = true
				this.$api.get_search({
					value
				
					}).then((res)=>{
						const {data} = res
				      this.searchList = data
					  this.loading = false
					  console.log(data)
				}).catch(()=>{
					this.loading = false
				})
				
				
			}
		},
		computed:{
			...mapState(['historyLists'])
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
	display: flex;
	background-color: #f5f5f5;
	
}
.home{
	display: flex;
	flex-direction: column;
	flex: 1;
	// border: 1px solid red;
	.label-box{
		background-color: #fff;
		margin-bottom: 10px;
		.label-header{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666;
			padding: 10px 15px;
			border-bottom:1px #f5f5f5 solid ;
			.label-title{
				color: $uni-base-color;
			}
			.label-clear{
				color: #30b33a;
				font-weight: bold;
			}
		}
		.label-content {
			display: flex;
			flex-wrap: wrap;
			padding: 15px;
			padding-top: 0;
			.label-content_item{
				padding: 2px 10px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 5px;
				border: 1px #666 solid;
				font-size: 14px;
				color: #666;
			}
		
		}
		.no-data{
					width: 100%;
					height: 200px;
					line-height: 200px;
					font-size: 12px;
					text-align: center;
					color: #666;
				}
	}
}

</style>
