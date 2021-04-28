<template>
<view class="home">
		<navbar></navbar>
        <tab :list='tabList' @tab='tab' :tabIndex="tabIndex" ></tab>
	   <view class="home_list">
	   	 <list :tab="tabList" :swiperIndex = "swiperIndex" @change ="change" ></list>
	   </view>
	
</view>
</template>

<script>
	import {mapState} from 'vuex'
	// import navbar from '@/components/navbar/navbar.vue'
	export default {
		// components:{
			// navbar
		// },
		data() {
			return {
				tabList:[],
				tabIndex:0,
				swiperIndex:0
			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		watch:{
			userinfo(newval){
				 this.getLabel()
			}
		},
		onLoad() {
			uni.$on('labelChange',(res)=>{
				this.tabList = []
				this.tabIndex = 0
				this.swiperIndex = 0
				
				this.getLabel()
			})
		},
		onShow(){
			uni.$on('labelChange',(res)=>{
				this.tabList = []
				this.tabIndex = 0
				this.swiperIndex = 0
				this.getLabel()
			})
		},
		
		methods: {
			change(current){
				console.log(current)
				this.tabIndex = current
				this.swiperIndex = current
			},
			tab({data,index}){
				console.log(index)
				this.swiperIndex = index
			},
			 getLabel(){
				this.$api.get_label().then((res)=>{
						const {data} = res
						console.log(data)
						data.unshift({
							name:'全部'})
						this.tabList = data
						console.log(this.tabList)
				}).catch(err=>console.log(err))
				
				
			}
		}
	}
</script>

<style lang="scss">
 page{
	 display: flex;
	 height: 100%;
 }
 .home {
	 display: flex;
	 flex-direction: column;
	 flex:1;
	overflow: hidden;
	.home_list {
		flex: 1;
		box-sizing: border-box;
		// border: 1px solid red;
	}
	 
 }
 
</style>
