define(['./module'], function (directives) {
    'use strict';
    directives.directive('moveFocus', function() {
        return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attr, ngModelCtrl) {
        function fromUser(text) {
                if (text.length == 5) {
                    elem.parent().next().children("input.form-control").focus();
                    return text;
                }
                if(text.length == 0){
                    elem.parent().prev().children("input.form-control").focus()
                }
                return undefined;
            } 
            ngModelCtrl.$parsers.push(fromUser);
      }
    };
  });
  });