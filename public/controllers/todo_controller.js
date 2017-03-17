function TodoController($scope, $http, $state, $stateParams) {
  console.log('todo controller')
  const self = this;
  const server = 'http://localhost:3000';

  this.todo = "";
  this.text = "";

  this.getTodo = getTodo;
  this.editTodo = editTodo;
  this.deleteTodo = deleteTodo;

  // State changers
  this.goTodo = goTodo;

  function getTodo(){
    console.log($stateParams.todoId)
    $http.get(`${server}/todos/${$stateParams.todoId}`)
      .then(function(response){
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
          self.lists = response.data.lists
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
