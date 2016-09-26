define(['./module'], function (services) {
    'use strict';
    services.value('version', '0.1');
    var employee = [{
        "empid": 13212,
        "fname": "Vishnu",
        "lname": "Vijayasankar",
        "desig": "Manager",
        salary:{
            USDsal:"$1100"
        }
    },
    {
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        salary:{
            USDsal:"$1200"
        }
    }];
    services.addEmployee = function (newObj) {
        employee.push(newObj);
        return employee;
    };
    services.getEmployees = function () {
        return employee;
    };
    return services;
});
