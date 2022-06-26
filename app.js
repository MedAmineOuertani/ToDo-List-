//jshint esversion:6
const express=require("express");
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js');


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

let item=[];
let work=[];

app.get('/',function(req,res){
    
    res.render('list',{title: date( ) , newitem: item});
});
app.post('/',function(req,res){
    if(req.body.button=='work'){
        work.push(String(req.body.item));
        res.redirect('/work');
    }else{
        item.push(String(req.body.item));
        res.redirect('/');
    }
    
    
});
app.get('/work',function(req,res){
    res.render('list',{title :"work",newitem: work});
}); 
app.get("/about",function(re,res){
    res.render('about',{});
});
app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");
});
