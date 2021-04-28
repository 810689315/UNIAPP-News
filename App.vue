<script>
	export default {
		onLaunch: function() {
			console.log(this)
			this.$api.get_user({
				user_id:'6082a66d19a4150001b4e303'
			}).then(res=>{
				const {
					data
				} = res
				console.log(res.data)
				this.$store.dispatch('set_userinfo',data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import  '@/components/gaoyia-parse/parse.css';
</style>
