<template>
	
		<swiper  class="list-swiper" :current="swiperIndex" @change="change">
			<swiper-item  v-for="(item , index) in tab "  class="list-swiper-item">
			<list-item :list1="listCodeIndex[index]" :load = "load[index]" @loadMore="loadMore"></list-item>
			</swiper-item>
			
		
		</swiper>

</template>

<script>
	import listItem from './list-item.vue'
	export default {
		components:{
			listItem
		},
		props:{
			tab:{
				type:Array,
				default(){
					return []
				}
			},
			swiperIndex:{
				type:Number,
				default:0
			}
		},
		watch:{
			tab(newl){
				if(newl.length === 0 ) return
				this.load = {}
				this.listCodeIndex = {}
				this.getList(this.swiperIndex)	
			}
		},
		data() {
			return {
				list:[],
				listCodeIndex:{},
				load:{
					
				},
				pageSize:10
			};
		},
		// create 相当于 load事件，在组件里面没有load事件，用create代替
		created() {
		// this.getList(0)	
		uni.$on('update_article',(e)=>{
			console.log(e)
			if(e === 'follow'){
				this.load = {}
				this.listCodeIndex = {}
				this.getList(this.swiperIndex)
			}
			
		})
		},
		methods:{
			loadMore(){
				if(this.load[this.swiperIndex].loading === 'noMore') return
				// console.log('加载更多')
				this.load[this.swiperIndex].page++
				this.getList(this.swiperIndex)
			},
			change(e){
				const {current} = e.detail
				// console.log(e)
				// console.log(this.tab[current])
				this.$emit('change',current)
				// 当数据不存在或者数据的长度等于 零的情况下，才去请求数据
				if(!this.listCodeIndex[current] || this.listCodeIndex[current].length==0){
					this.getList(current)
				}
			},
			getList(current){
				if(!this.load[current]){
					this.load[current] = {
						page:1,
						loading:'loading'
					}
				}
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[this.swiperIndex].page++,
					pageSize:this.pageSize
					}).then((res)=>{
						console.log(res)
						const {data} = res
						if(data.length === 0){
							let oldLoad = {}
							oldLoad.loading = 'noMore'
							oldLoad.page = this.load[current].page
							
							this.$set(this.load,current,oldLoad)
							// 强制渲染页面
							this.$forceUpdate()
						
							return
						}
						let oldData = this.listCodeIndex[current] ||[]
						oldData.push(...data)
						// this.listCodeIndex[current] = data
						this.$set(this.listCodeIndex,current,oldData)
						// console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
				
				
			}
		}
	}
</script>

<style lang="scss">
 
	 .list-swiper {
		 height: 100%;
		 .list-swiper-item {
			 height: 100%;
			 overflow: hidden;
			 // .list-scroll {
				//  height: 100%;
			 // }
		 }
	 }
 
</style>
