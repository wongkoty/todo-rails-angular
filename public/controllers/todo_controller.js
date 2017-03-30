function TodoController($scope, $rootScope, $http, $state, $stateParams) {
  console.log('todo controller')
  const self = this;
  const server = 'http://localhost:3000';

  this.todo = "";
  this.text = "";

  this.getTodo = getTodo;
  this.editTodo = editTodo;
  this.newTodo = newTodo;
  this.deleteTodo = deleteTodo;

  // State changers
  this.goTodo = goTodo;

  function getTodo(){
    console.log($stateParams.todoId)
    $http.get(`${server}/todos/${$stateParams.todoId}`)
      .then(response => {
        console.log(response);
        self.todo = response.data;
      })
  }

  function editTodo() {
    console.log('edit todo');
    const data = { text: self.text }
    $http.put(`${server}/todos/${$stateParams.todoId}`, data)
      .then(response => {
        console.log(response);
        self.title = "";
        if (response.status == 200) {
          console.log('changing list')
          self.todo = response.data;
          self.text = "";
        }
      })
  }

  function newTodo(listId) {
    console.log('new todo');
    console.log(listId)
    console.log(this.text[listId])
    const data = {text: this.text[listId], list_id: listId}
    $http.post(`${server}/todos/`, data)
      .then(response => {
        console.log(response)
        if (response.status == 201) {
          $rootScope.$broadcast('newTodo', response)
        }
      })

  }

  function deleteTodo(todoId) {
    console.log('deleteTodo')
    console.log(todoId);
    $http.delete(`${server}/todos/${todoId}`)
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          console.log(response)
          $rootScope.$broadcast('deleteTodo', response)
        }
      })
  }


  function goTodo(listId, todoId) {
    console.log('show todo')
    console.log(listId);
    console.log(todoId);
    $state.go('showTodo', { listId: listId, todoId: todoId });
  }

}
