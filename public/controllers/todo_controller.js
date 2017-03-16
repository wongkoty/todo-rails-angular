function TodoController($scope, $http, $state, $stateParams) {
  console.log('todo controller')
  const self = this;
  const server = 'http://localhost:3000';

  this.showTodo = showTodo;

  function showTodo(todoId) {
    console.log('showTodo')
    console.log(todoId);
  }

}
