function HomeController($scope, $http, $state, $stateParams) {
  var self = this;
  var server = 'http://localhost:3000'

  // Variables
  this.lists = "";
  this.list = "";
  this.todos = "";


  // Functions
  this.getLists = getLists;
  this.showList = showList;

  this.goList = goList;
  this.goLists = goLists;

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

  function goList(listId){
    console.log('go list')
    $state.go('showList', {listId: listId})
  }

  function goLists(){
    self.getLists();
    $state.go('home')
  }
}
