var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data = [];
module.exports = function(app){
    
    app.get('/StaHotel', function(req,res){
        
        res.render('StaHotel');
    });
    app.get('/Form',function(req,res){
       res.render('Form'); 
    });
    app.post('/Form', urlencodedParser, function(req,res){
       data.push(req.body);
       res.json(data);
    });
    app.get('/myOrder',function(req,res){
        
            res.render('myOrder', {orders : data});
         
    });
    app.delete('/myOrder/:item',function(req,res){
       data = data.filter(function(myOrder){
           return myOrder.item !== req.params.item;
       }) ;
        res.json(data);
    });
};