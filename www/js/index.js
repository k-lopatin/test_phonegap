/*
 * Todo List
 */
function TodoCtrl($scope) {
    //$scope.todos = JSON.parse(localStorage.getItem('tasks'));
    $scope.todosFromStorage = JSON.parse(localStorage.getItem('tasks'));
    $scope.todos = [];
    for (var i in $scope.todosFromStorage) {
        $scope.todos.push({text: $scope.todosFromStorage[i].text,
            done: $scope.todosFromStorage[i].done});
    }
    $scope.temp = '';

    $scope.getTotalTodos = function() {

        return $scope.todos.length;

    }
    $scope.addTodo = function() {
        if ($scope.formTodoText.length > 1) {
            $scope.todos.push({text: $scope.formTodoText, done: false});
            localStorage.setItem('tasks', JSON.stringify($scope.todos));
        }
        window.location.reload(false);
    }
    $scope.edit = function(i) {
        localStorage.setItem('tasks', JSON.stringify($scope.todos));
    }
    $scope.chDone = function(i) {
        $scope.todos[i].done = !$scope.todos[i].done;
        localStorage.setItem('tasks', JSON.stringify($scope.todos));
    }

    $scope.clearAll = function() {
        $scope.todos = [];
        localStorage.setItem('tasks', JSON.stringify($scope.todos));
    }
    $scope.updateAll = function() {
        for (var i in $scope.todos) {
            $scope.todos[i].done = false;
        }
        localStorage.setItem('tasks', JSON.stringify($scope.todos));
    }

}


$(document).ready(function() {
    //$('.done-true').hide();
    $('.done-true').prop('checked', true)
})