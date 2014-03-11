/*
 * Todo List
 */
function TodoCtrl($scope) {
    //$scope.todos = JSON.parse(localStorage.getItem('tasks'));
    $scope.todosFromStorage = JSON.parse( localStorage.getItem('tasks') );
    $scope.todos = [];
    for( var i in $scope.todosFromStorage){
        $scope.todos.push({text: $scope.todosFromStorage[i].text, 
            done: $scope.todosFromStorage[i].done});
    }
    
    $scope.getTotalTodos = function(){
        
        return $scope.todos.length;
        
    }
    $scope.addTodo = function(){
        $scope.todos.push({text: $scope.formTodoText, done: false});
        localStorage.setItem('tasks', JSON.stringify($scope.todos));
    }
    

}