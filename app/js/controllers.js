'use strict';

angular.module('myApp.controllers', [])
    .controller('TodoCtrl', ['$scope', function($scope) {
        $scope.todos = [
            {id:0, description: 'do the garbage', done: true},
            {id:1, description: 'do the garden', done: false},
            {id:2, description: 'clean the house', done: true}
        ];

        $scope.addItem = function(newItem) {
            $scope.todos.push(
                {
                    id:$scope.todos.length,
                    description: newItem,
                    done: false
                }
            );
        };
    }])

.controller('TodoDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.todoItem = $scope.todos[$stateParams.id];

        $scope.completeItem = function() {
            if(!$scope.todoItem.done) {
                $scope.todoItem.done = true;
            }
        };
    }]);