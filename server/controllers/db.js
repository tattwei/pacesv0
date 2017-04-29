// server/controllers/db.js

let Models = require('../models')

module.exports={
    
   save(req,res){
	res.send('<h1>SaveDB</h1>')
   },

    load(req,res){
	Models.Testdata.find({}, (err,record)=>{
		res.json(record)           
	})
    }
}
