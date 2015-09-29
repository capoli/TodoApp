'use strict';

angular.module('myApp.controllers', [])
    .controller('TodoCtrl', ['$scope', 'TodoService', function($scope, TodosService) {
        //$scope.todos = [
        //    {id:0, description: 'do the garbage', done: true},
        //    {id:1, description: 'do the garden', done: false},
        //    {id:2, description: 'clean the house', done: true}
        //];
        TodosService.getAll().then(function (todos) {
            $scope.todos = todos;
        });
        $scope.count = 0;
        //this.incompleteItems = function() {
        //    angular.forEach($scope.todos, function(item) {
        //        if(!item.done) $scope.count++;
        //    });
        //};

        $scope.addItem = function(newItem) {
            $scope.todos.push(
                {
                    id:$scope.todos.length,
                    description: newItem,
                    done: false
                }
            );
        };

        $scope.$watch('todos', function(newValue, oldValue) {
            console.log(newValue);
            this.count = 0;
            angular.forEach($scope.todos, function(item) {
                if(!item.done) this.count++;
            }.bind(this));
            $scope.count = this.count;
        }, true);

        //$scope.doneChanged = function(done) {
        //    if(done) $scope.count--;
        //    else $scope.count++;
        //};

        //$scope.incompleteItems = function() {
        //    this.count = 0;
        //    angular.forEach($scope.todos, function(item) {
        //        if(!item.done) this.count++;
        //    }.bind(this));
        //    return this.count;
        //};
    }])

.controller('TodoDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.todoItem = $scope.todos[$stateParams.id];

        $scope.completeItem = function() {
            if(!$scope.todoItem.done) {
                $scope.todoItem.done = true;
            }
        };
    }]);