const mongoose=require('mongoose')
var schema=mongoose.Schema
const SalSchema=schema({
  eid:Number,
  salary:Number,
  designation:String
})
module.exports=mongoose.model('Salary',SalSchema)
