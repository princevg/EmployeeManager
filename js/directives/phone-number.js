define(['./module'], function (directives) {
    'use strict';
    directives.directive('phoneNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9()]/g, '');
                    
                    
                    console.log(transformedInput.length); //logs 3
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    console.log(transformedInput)
                    return transformedInput;
                }
                return undefined;
            } 
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
});
