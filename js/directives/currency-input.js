define(['./module'], function (directives) {
    'use strict';
    directives.directive('currencyInput', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            
            return ctrl.$parsers.push(function(inputValue) {
                var inputVal = element.val();
                //clearing left side zeros
                while (inputVal.charAt(0) == '0') {
                    inputVal = inputVal.substr(1);
                }

                inputVal = inputVal.replace(/[^\d.\',']/g, '');

                var point = inputVal.indexOf(".");
                if (point >= 0) {
                    inputVal = inputVal.slice(0, point + 3);
                }

                var decimalSplit = inputVal.split(".");
                var intPart = decimalSplit[0];
                var decPart = decimalSplit[1];

                intPart = intPart.replace(/[^\d]/g, '');
                if (intPart.length > 3) {
                    var intDiv = Math.floor(intPart.length / 3);
                    while (intDiv > 0) {
                        var lastComma = intPart.indexOf(",");
                        if (lastComma < 0) {
                            lastComma = intPart.length;
                        }

                        if (lastComma - 3 > 0) {
                            intPart = intPart.slice(0, lastComma - 3) + "," + intPart.slice(lastComma - 3);
                        }
                        intDiv--;
                    }
                }

                if (decPart === undefined) {
                    decPart = "";
                }
                else {
                    decPart = "." + decPart;
                }
                var res = intPart + decPart;
                    if(res.length > 0){
                        "$" + res
                    }
                if (res != inputValue) {
                    ctrl.$setViewValue(res);
                    ctrl.$render();
                }

            });

        }
    };
});


});

