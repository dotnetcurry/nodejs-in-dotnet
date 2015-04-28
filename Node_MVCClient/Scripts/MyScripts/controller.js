app.controller('mynodecontroller', function ($scope, mynodeservice) {

    //The Employee Object used to Post
    $scope.Employee = {
        _id:"",
        EmpNo: 0,
        EmpName: "",
        Salary: 0,
        DeptName: "",
        Designation:""
    }

    loaddata();
    //Function to load all records
    function loaddata() {
        var promise = mynodeservice.get();

        promise.then(function (resp) {
            $scope.Employees = resp.data;
            $scope.message = "Call is Successful ";
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    };

    //Function to POST Employee
    $scope.save = function () {
        var promisePost = mynodeservice.post($scope.Employee);

        promisePost.then(function (resp) {
            $scope.message = "Call is Successful";
            loaddata();
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    };

    $scope.clear = function () {
        $scope.Employee.EmpNo = 0;
        $scope.Employee.EmpName = "";
        $scope.Employee.Salary = 0;
        $scope.Employee.DeptName = "";
        $scope.Employee.Designation = "";
    };

    $scope.delete = function (emp) {
        var id = emp._id;
        var promiseDelete = mynodeservice.delete(id);

        promiseDelete.then(function (resp) {
            $scope.message = "Call is Successful";
            loaddata();
        }, function (err) {
            $scope.message = "Error in Call" + err.status
        });
    }
});