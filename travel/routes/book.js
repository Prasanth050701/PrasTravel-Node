var express = require('express');
var router = express.Router();
var db = require('../db')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  

});


router.post('/', function(req, res) {

    db.connect(function(err){
        if(err){
            throw err;
        }
        console.log("Connection success");

        db.query("insert into book(whereto,howmany,fromdate,todate,enteryourdetails) values(?,?,?,?,?)",[
            req.body.whereto,req.body.howmany,req.body.fromdate,req.body.todate,req.body.enteryourdetails
        ],function(err,results){
            if(err)
            throw err;
            
            res.send(JSON.stringify("success")); 
        
        })
    })

  
});

module.exports = router;
