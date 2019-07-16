module.exports = function(app){
    
    app.get('/StaHotel', function(req,res){
        
        res.render('StaHotel');
    });
    app.get('/Form',function(req,res){
       res.render('Form'); 
    });
     app.post('/StaHotel', function(req,res){
        
    });
    
};