app.service('mynodeservice', function ($http) {
    this.get = function(){
        var res = $http.get("http://localhost:8080/EmployeeList/api/employees");
        return res;
    }

    this.post = function (emp) {
        var res = $http.post("http://localhost:8080/EmployeeList/api/employees",emp);
        return res;
    }

    this.delete = function (id) {
        debugger;
        var res = $http.delete("http://localhost:8080/EmployeeList/api/employees/",id);
        return res;
    }
});