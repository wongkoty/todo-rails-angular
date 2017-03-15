function HomeController($scope, $http, $state, $stateParams) {
  var self = this;
  var server = 'http://localhost:3000'

  // Variables
  this.lists = "";
  this.list = "";
  this.todos = "";
  this.title = "";


  // Functions
  this.getLists = getLists;
  this.showList = showList;
  this.postNewList = postNewList;
  this.deleteList = deleteList;
  this.editList = editList;


  // state changes
  this.goList = goList;
  this.goLists = goLists;
  this.goNewList = goNewList;

  function getLists() {
    console.log('getLists')
    $http.get(`${server}/lists`)
      .then(response => {
        console.log(response);
        self.lists = response.data.lists;
        console.log(self.lists);
      })
  }

  function showList() {
    console.log('show list')
    console.log($stateParams.listId)
    $http.get(`${server}/lists/${$stateParams.listId}`)
      .then(response => {
        console.log(response);
        self.list = response.data.list;
        self.todos = response.data.todos;
      })
  }

  function postNewList() {
    console.log('post new list')
    // console.log(self.title);
    const data = { title: self.title }
    $http.post(`${server}/lists/`, data)
      .then(response => {
        console.log(response);
        self.title = "";
        $state.go('home');
      })
  }

  function deleteList(listId) {
    console.log('delete list');
    $http.delete(`${server}/lists/${listId}`)
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          self.lists = response.data.lists
        }
      })
  }

  function editList() {
    console.log('editing list');
    console.log($stateParams.listId)
    console.log(self.title);
    const data = { title: self.title }
    console.log(data);
    $http.put(`${server}/lists/${$stateParams.listId}`, data)
      .then(response => {
        console.log(response);
        self.title = "";
        if (response.status == 200) {
          console.log('changing list')
          self.list = response.data;
        }
      })
  }

  function goNewList() {
    console.log('new list');
    $state.go('newList');
  }

  function goList(listId){
    console.log('go list')
    $state.go('showList', {listId: listId})
  }

  function goLists(){
    self.getLists();
    $state.go('home')
  }
}
