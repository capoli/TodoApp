'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.controllers',
    'myApp.version'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/todo");

        $stateProvider
            .state('todo', {
                abstract: true,
                url: '/todo',
                templateUrl: 'partial/todo.html',
                controller: 'TodoCtrl'
            })
            .state('todo.list', {
                url: '/list',
                templateUrl: 'partial/todo.list.html'
            })
            .state('todo.detail', {
                url: '/:id',
                templateUrl: 'partial/todo.detail.html',
                controller: 'TodoDetailCtrl'
            });
    });