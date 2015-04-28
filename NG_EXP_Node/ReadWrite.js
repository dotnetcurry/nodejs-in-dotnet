var mongooseDrv = require('mongoose'); //Get the Mongoose Driver
//mongooseDrv.connect('mongodb://127.0.0.1:27017/EmployeeDB'); //Define the connection with the MongoDB


mongooseDrv.connect('mongodb://localhost/EmployeeDB');
var db = mongooseDrv.Connection; //The Connection 

if (db == 'undefined') {
    console.log("The Connecion issues");
}

//console.log("The Connecion Stats " + database.STATES.toString());
//The Schema for the Data to be Stored
var EmployeeInfoSchema = mongooseDrv.Schema({
    EmpNo: String,
    EmpName: String,
    Salary: String,
    DeptName: String,
    Designation: String
});

var EmployeeInfoModel = mongooseDrv.model('EmployeeInfo', EmployeeInfoSchema);

//addData();

function addData() {
    console.log("In  Add");

    EmployeeInfoModel.find().exec(function (error, results) {
        if (results.length === 0) {
            EmployeeModel.create({ EmpNo: 201, EmpName: "Ajay", Salary: 45000 });
        }
    });
}


//db.on('error', console.error.bind(console, 'There is problem with Database Connection'));

//db.once('open', function () {
//    console.log("EmployeeDB is now open...")
//});

//retrieve all records from the database 
exports.get = function (req, resp) {
    EmployeeInfoModel.find().exec(function (error, res) {
        if (error) { 
            resp.send(500, {error:error});
        } else { 
            resp.send(res);
        }

    }); 
};

//Add a new Record in the Employee Model
exports.add = function (request, response) {
  
    var newEmp = { EmpNo: request.body.EmpNo,EmpName: request.body.EmpName,Salary: request.body.Salary,DeptName: request.body.DeptName,Designation: request.body.Designation};
    EmployeeInfoModel.create(newEmp, function (addError, addedEmp) {
        if (addError) {
            response.send(500, { error: addError });
        }
        else {
            response.send({ success: true, emp: addedEmp });
        }
    });
};
exports.delete = function (request, response) {
    var id = request.params.Id;
    console.log("id " + id);
    EmployeeInfoModel.remove({ _id: id }, function (remError, addedEmp) { 
        if (remError) {
            response.send(500, { error: remError });
        }
        else {
            response.send({ success:200});
        }
    });
};
