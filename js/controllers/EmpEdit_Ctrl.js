define(['./module','../services/commonServices'], function (controllers,commonServices) {
    'use strict';    
    controllers.controller('EmpEdit_Ctrl', ['$scope',function ($scope, $state) {
            var key;
            
           $scope.edit = function(emp,index) {
            key = index;
            $scope.employee.id = emp.id;
            $scope.employee.fname = emp.fname;
            $scope.employee.lname = emp.lname;
            $scope.employee.desig = emp.desig;
        };

        $scope.update = function(isValid) {
            if(isValid) {
                $scope.employee[key].id = $scope.employee.id;
                $scope.employee[key].fname = $scope.employee.fname;
                $scope.employee[key].lname = $scope.employee.lname;
                $scope.employee[key].desig = $scope.employee.desig;
                $scope.employee.id = '';
                $scope.employee.fname = '';
                $scope.employee.lname = '';
                $scope.employee.desig = '';
            }
        };
    }]);
});
