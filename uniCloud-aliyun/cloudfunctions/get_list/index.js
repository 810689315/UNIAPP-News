'use strict';
// 获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		name,
		user_id,
		page = 1,
		pageSize = 10
		} = event
	
	let getAll = {}
	if(name !== '全部'){
		getAll = {
			classify:name
		}
	}

	const userinfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userinfo.data[0].article_likes_ids
	
	
	
	// 聚合 ： 更精细化的去处理数据，求和、分组、指定那些字段
	const list = await db.collection('article')
	.aggregate()
	// 追加字段
	.addFields({
		is_like:$.in(['$_id',article_likes_ids])
	})
	.match(getAll)
	.project({
		content:0
	})
	// 要跳过多少数据
	.skip(pageSize*(page-1))
	// 限制下一阶段输出的
	.limit(pageSize)
	.end()
	
	
	// 接收分类，通过分类去筛选数据
	// let list = await db.collection('article')
	// .field({
	// 	// true 只返回这个字段， false表示不返回这个字段
	// 	content:false
	// })
	// .get()
	
	//返回数据给客户端
	return {
		code:200,
		msg:'数据返回成功',
		data:list.data,
		
	}
};
