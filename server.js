var express=require('express');
var app=express();
var mongoose=require('mongoose');
var route=require('./api/router/index')

const port=process.env.PORT || 5000
app.listen(port,()=>{
console.log("Server Started on Port:"+port);
})


//configure body parser
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));



app.use('/api',route);

mongoose.connect('mongodb://localhost:27017/LookupDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},console.log("MongoDB Connected"));