//jshint esversion:6
const express=require("express");
const bodyParser=require('body-parser');


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

let item=[];

app.get('/',function(req,res){
    let today =new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month : "long"
    };
    let day =today.toLocaleDateString("en-US",options);
    res.render('list',{kindOfDay: day , newitem: item});
});
app.post('/',function(req,res){
    item.push(String(req.body.item));
    res.redirect('/');
    
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running on port 3000");
});
