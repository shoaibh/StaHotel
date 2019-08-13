var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shoaib:shoaib@cluster0-pntjq.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})

var orderschema = new mongoose.Schema({
    item: String,
    name: String
});

var Ordersmodel = mongoose.model('Order', orderschema);


var data = [];
module.exports = function(app){
    
    app.get('/StaHotel', function(req,res){
        
        res.render('StaHotel');
    });
    app.get('/Form',function(req,res){
       res.render('Form'); 
    });
    app.post('/Form', urlencodedParser, function(req,res){
        
        var newOrder = Ordersmodel(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        
       
    });
    app.get('/myOrder',function(req,res){
        
        Ordersmodel.find({},function(err,data){
            if(err) throw err;
            res.render('myOrder', {orders : data});
        })   
    });
    app.delete('/myOrder/:item',function(req,res){
        
        orders.find({item: req.params.item.name}).remove(function(err,data){
            console.log(item)
            if(err) throw err;
            
        res.json(data);
        })
        
       
    });
};