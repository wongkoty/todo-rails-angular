function TodoController($scope, $http, $state, $stateParams) {
  console.log('todo controller')
  const self = this;
  const server = 'http://localhost:3000';



  this.deleteTodo = deleteTodo;

  this.goTodo = goTodo;

  function deleteTodo(todoId) {
    console.log('deleteTodo')
    console.log(todoId);
  }


  function goTodo(listId, todoId) {
    console.log('show todo')
    console.log(listId);
    console.log(todoId);
    $state.go('showTodo', { listId: listId, todoId: todoId });
  }

}
