const mongoose=require('mongoose')
var schema=mongoose.Schema
const EmpSchema=schema({
  eid:Number,
  name:String,
  emailid:String
})
module.exports=mongoose.model('Employee',EmpSchema)

