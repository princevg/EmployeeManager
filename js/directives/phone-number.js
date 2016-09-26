define(['./module'], function (directives) {
    'use strict';
    directives.directive('phoneNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');  
                    var PH = transformedInput;
                        PH = PH.replace("(", "");
                        PH = PH.replace(")", "");
                        PH = PH.replace("-", "");
                        PH = PH.replace(" ", "");

                        if (PH.length < 3)
                        {
                            transformedInput = "(" + PH;
                        }
                        if (PH.length > 3 && PH.length <= 6)
                        {
                            transformedInput = "(" + PH.substring(0, 3) + ") " + PH.substring(3, 6);
                        }
                        if (PH.length > 6)
                        {
                            transformedInput = "(" + PH.substring(0, 3) + ") " + PH.substring(3, 6) + "-" + PH.substring(6, 10);
                        }
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
