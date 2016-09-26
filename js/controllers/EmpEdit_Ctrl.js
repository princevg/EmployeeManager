define(['./module','../services/commonServices'], function (controllers,commonServices) {
    'use strict';    
    controllers.controller('EmpEdit_Ctrl', ['$scope','$stateParams','$state',function ($scope, $stateParams, $state) {
            var index = parseInt($stateParams.mode.split("-")[1]),
                employee = commonServices.getEmployees()[index];
        $scope.employee = employee;
        $scope.updateSalary = function () {
                var baseSal = parseFloat($scope.employee.salary.baseSal || 0),
                        hra = parseFloat($scope.employee.salary.hra || 0),
                        spclAlwnc = parseFloat($scope.employee.salary.spclAllowance || 0);
                $scope.employee.salary.grossSal = baseSal + hra + spclAlwnc;
            };

            $scope.updateSalarySplitup = function () {
                var baseSal = parseFloat($scope.employee.salary.baseSal || 0),
                        hra = parseFloat($scope.employee.salary.hra || 0),
                        spclAlwnc = parseFloat($scope.employee.salary.spclAllowance || 0),
                        total = baseSal + hra + spclAlwnc;
                $scope.employee.salary.baseSal = ($scope.employee.salary.grossSal / (total)) * baseSal;
                $scope.employee.salary.hra = ($scope.employee.salary.grossSal / (total)) * hra;
                $scope.employee.salary.spclAllowance = ($scope.employee.salary.grossSal / (total)) * spclAlwnc;
            };
        $scope.update = function() {
               var employees = commonServices.updateEmployee($scope.employee,index);
               localStorage["emplist"] = JSON.stringify(employees);
               $state.go('home', {'mode': 'list'});
        };
    }]);
});
