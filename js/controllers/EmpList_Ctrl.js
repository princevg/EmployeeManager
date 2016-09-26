define(['./module','../services/commonServices'], function (controllers,commonServices) {
    'use strict';    
    controllers.controller('EmpList_Ctrl', ['$scope', '$state',function ($scope,$state) {
            $scope.employee = commonServices.getEmployees();
            console.log($scope.employee)
            $scope.showForm = $scope.showForm || false;
        $scope.saveEmp = $scope.saveEmp || false;
        $scope.updateEmp = $scope.updateEmp || false;
        $scope.submitted = $scope.submitted || false;
        var key;
        $scope.edit = function(index){
            $state.go('home', { 'mode':'edit', 'id':index})
        }
        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            $scope.submitted = true;
        };

        $scope.add = function() {
            $state.go('home', { 'mode':'add'})
        };

        $scope.save = function(isValid) {
            if(isValid) {
                $scope.employee.push({
                    'id': $scope.employee.id,
                    'fname': $scope.employee.fname,
                    'lname': $scope.employee.lname,
                    'desig': $scope.employee.desig
                });
                $scope.employee.id = '';
                $scope.employee.fname = '';
                $scope.employee.lname = '';
                $scope.employee.desig = '';
                $scope.showForm = false;
            }
        };

        

        $scope.delete = function(index) {
            $scope.employee.splice(index, 1);
        };
    }]);
});
