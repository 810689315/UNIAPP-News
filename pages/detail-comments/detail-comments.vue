<template>
	<view>
		<view class="comments-content" v-for="(item,index) in commentsList" :key="item.comment_id" >
			<comments-box :comments="item" ></comments-box>
		</view>
		<uni-load-more v-if="commentsList.length === 0 || commentsList.length>5" iconType="snow" :status="loading"></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			article_id:'',
			commentsList:[],
			page:1,
			pageSize:5,
			loading:'loading'
			};
		},
		methods:{
			// 获取评论数据
			getComments(){
				this.$api.get_comments({
					article_id: this.article_id,
					page:this.page,
					pageSize:this.pageSize
				}).then(res=>{
				const {data} = res
				if(data.length === 0 ){
					this.loading = 'noMore'
					return
				}
				// 对象复制
				let oldFormData = JSON.parse(JSON.stringify(this.commentsList))
				oldFormData.push(...data)
				this.commentsList = oldFormData
					
				})
			}
		},
		onLoad(query) {
			this.article_id = query.id
			this.getComments()
			console.log(query)
		},
		onReachBottom() {
			if(this.loading == 'noMore') return
			this.page++
			this.getComments()
			console.log('----上拉触底')
		}
	}
</script>

<style lang="scss">
	.comments-content {
		padding: 0 15px;
	}

</style>
