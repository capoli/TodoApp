'use strict';

angular.module('myApp.services', [])
    .factory('TodoService', ['$q', '$http', function($q, $http) {
        function getAll() {
            var callbacks = {
                success: function (res) {
                    console.log(res.data);
                    return res.data;
                },
                error: function () {
                    $q.reject('error: ' + 'data/todos.json');
                }
            };
            return $http.get('data/todos.json')
                .then(callbacks.success, callbacks.error);
        }

        return {
            getAll: getAll
        }
    }]);