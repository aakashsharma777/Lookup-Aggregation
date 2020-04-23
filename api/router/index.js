var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/registeremp',user.registeremp)
router.post('/salary',user.salary)
router.post('/getdetail',user.getdetail)
router.post('/lookupagg',user.lookupagg)

module.exports=router;
