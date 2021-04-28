<template>
	<view class="icons" @click.stop="likeTap">
		<uni-icons size="20"  color="#f07373" :type="like? 'heart-filled':'heart' "></uni-icons>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {
						
					}
				}
			},
			types:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				like:false
			};
		},
		watch:{
			item(newval){
				this.like = this.item.is_like
			}
		},
		created() {
			this.like = this.item.is_like
		},
		methods:{
			likeTap(){
				this.like = !this.like
				this.setUpdataLikes()
				console.log('收藏按钮被点击')
			},
			setUpdataLikes(){
				uni.showLoading({
					
				})
				this.$api.updata_like({
					user_id:'6082a66d19a4150001b4e303',
					article_id:this.item._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icons:'none'
					})
					uni.$emit('update_article',this.types)
					console.log(res)
				}).catch(err=>{
					uni.hideLoading()
					console.log(err)
				})
			}
		}
	}
</script>

<style>
 .icons{
				  position: absolute;
				  right: 0;
				  top: 0;
				  display: flex;
				  justify-content: center;
				  align-items: center;
				  width: 20px;
				  height: 20px;
				  // border: 1px solid red;
			  }
</style>
