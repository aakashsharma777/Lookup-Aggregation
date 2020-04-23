var Employee=require('../model/EmployeeModel') // schema
var Salary=require('../model/SalaryModel')


module.exports.registeremp=(request,response)=>{
    var eid=request.body.eid;
    var name=request.body.name;
    var emailid=request.body.emailid;    
    var newEmp = Employee({
        eid:eid,
        name:name,
        emailid:emailid        
    })
    newEmp.save(function (err, result) {
        console.log(result);
            if (err)
            response.json({msg:'Data Not Inserted',description:err})
            else if(result.eid!=undefined)
            response.json({msg:'Data Inserted'})
            else
           response.json({msg:'Data NOT Inserted'})
          });

}

module.exports.salary=(request,response)=>{
    var eid=request.body.eid;
    var salary=request.body.salary;
    var designation=request.body.designation;
    var newSal = Salary({
        eid:eid,
        salary:salary,
        designation:designation,
    })
    newSal.save(function (err, result) {
        console.log(result);
            if (err)
            response.json({msg:'Data Not Inserted',description:err})
            else if(result.eid!=undefined)
            response.json({msg:'Data Inserted'})
            else
           response.json({msg:'Data NOT Inserted'})
          });

}

module.exports.getdetail=(request,response)=>{
    var eid=request.body.eid;
    Employee.findOne({eid}, (err)=>{
        if (err) throw err;
        else{
        Employee.aggregate([
            {
                $match:{eid:eid}
            },
        { $lookup:
            {
                from:"salaries",
                localField:"eid",
                foreignField:"eid",
                as:"data"
            }

        }],(err,result)=>{
            console.log(result)
            if (err) throw err
            else if(result.length>0)
            response.json({'msg':result})
            else
            response.json({'msg':'No Data'})
        })
    }
})
}


module.exports.lookupagg=(request,response)=>{
    var eid=request.body.eid;
    Employee.findOne({eid}, (err)=>{
        if (err) throw err;
        else{
        Employee.aggregate([
            {
                $match:{_id:ObjectId}
            },
        { $lookup:
            {
                from:"salaries",
                localField:"ObjectId",
                foreignField:"_id",
                as:"data"
            }

        }],(err,result)=>{
            console.log(result)
            if (err) throw err
            else if(result.length>0)
            response.json({'msg':result})
            else
            response.json({'msg':'No Data'})
        })
    }
})
    

}