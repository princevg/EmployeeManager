define(['./module', '../services/commonServices'], function (controllers, commonServices) {
    'use strict';
    controllers.controller('EmpList_Ctrl', ['$scope', '$state', function ($scope, $state) {
            $scope.employee = commonServices.getEmployees();
            console.log($scope.employee)
            $scope.showForm = $scope.showForm || false;
            $scope.saveEmp = $scope.saveEmp || false;
            $scope.updateEmp = $scope.updateEmp || false;
            $scope.submitted = $scope.submitted || false;
            var key;
            $scope.edit = function (index) {
                $state.go('home', {'mode': 'edit-' + index})
            };

            $scope.sortType = 'fname'; // set the default sort type
            $scope.sortReverse = false;  // set the default sort order
            $scope.searchKey = '';     // set the default search/filter term

            $scope.add = function () {
                $state.go('home', {'mode': 'add'})
            };

            $scope.save = function (isValid) {
                if (isValid) {
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



            $scope.delete = function (index) {
                $scope.employee.splice(index, 1);
                localStorage["emplist"] = JSON.stringify($scope.employee)
            };
        }]);
});
