define(['./module'], function (services) {
    'use strict';
    services.value('version', '0.1');
    var employee = localStorage["emplist"] ? JSON.parse(localStorage["emplist"]) : [{
        "empid": 13212,
        "fname": "Vishnu",
        "lname": "Vijayasankar",
        "desig": "Manager",
        'phn':"(345) 123-5679",
        salary:{
            baseSal:1100,
            hra:200,
            spclAllowance:300,
            USDsal:"$1100",
            grossSal:'1600'
        },
        key:{
            field1:'12ECA',
            field2:'3AB12',
            field3:'AB458'
        }
    },
    {
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        'phn':"(377) 123-5789",
        salary:{
            baseSal:3300,
            hra:2010,
            spclAllowance:3010,
            USDsal:"$16100",
            grossSal:'8320'
        },
        key:{
            field1:'18ECA',
            field2:'3A912',
            field3:'AB458'
        }
    },
{
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        'phn':"(377) 123-5789",
        salary:{
            baseSal:3300,
            hra:2010,
            spclAllowance:3010,
            USDsal:"$16100",
            grossSal:'8320'
        },
        key:{
            field1:'18ECA',
            field2:'3A912',
            field3:'AB458'
        }
    },
{
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        'phn':"(377) 123-5789",
        salary:{
            baseSal:3300,
            hra:2010,
            spclAllowance:3010,
            USDsal:"$16100",
            grossSal:'8320'
        },
        key:{
            field1:'18ECA',
            field2:'3A912',
            field3:'AB458'
        }
    },
{
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        'phn':"(377) 123-5789",
        salary:{
            baseSal:3300,
            hra:2010,
            spclAllowance:3010,
            USDsal:"$16100",
            grossSal:'8320'
        },
        key:{
            field1:'18ECA',
            field2:'3A912',
            field3:'AB458'
        }
    },
{
        "empid": 16564,
        "fname": "Vinay",
        "lname": "Edadan",
        "desig": "Developer",
        'phn':"(377) 123-5789",
        salary:{
            baseSal:3300,
            hra:2010,
            spclAllowance:3010,
            USDsal:"$16100",
            grossSal:'8320'
        },
        key:{
            field1:'18ECA',
            field2:'3A912',
            field3:'AB458'
        }
    }];
    services.addEmployee = function (newObj) {
        employee.push(newObj);
        return employee;
    };
    services.updateEmployee = function (newObj,index) {
        employee.splice(index, 1, newObj);
        return employee;
    };
    services.getEmployees = function () {
        return employee;
    };
    return services;
});
