var con = require('../config/connect');

module.exports.find=function(where, cb){
	con.init(function(err, client){
		var db = client.db('tss_8');
		db.collection('user').find(where).toArray(cb);
	});
}