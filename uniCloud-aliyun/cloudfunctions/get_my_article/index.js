'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id
	} = event
	
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	let lists = await db.collection('article')
	.aggregate()
	.addFields({
		is_like:$.in(['$_id',userinfo.article_likes_ids])
	})
	.match({
		id:dbCmd.in(userinfo.article_ids)
	})
	.end()
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'我的文章数据返回成功',
		data:lists.data
	}
};
