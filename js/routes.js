define(['./app'], function (app) {
    'use strict';
    return app.config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home/:mode',
            views: {
                'content@': {
                    templateUrl:
                            function ($stateParams) {
                                var mode = $stateParams.mode.split("-")[0];
                                    return 'partials/' + mode + '.html';
                            }
                }
            },
            templateUrl: 'partials/home.html',
            controller: 'EmpList_Ctrl'
        })
                .state('view2', {
                    url: '/view2',
                    templateUrl: 'partials/partial2.html',
                    controller: 'MyCtrl2'
                });
    })
});