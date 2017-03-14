function HomeController($scope, $http, $state) {
  var self = this;
  var server = 'http://localhost:3000'

  // Variables
  this.lists = "";
  this.list = "";
  this.todo = "";


  // Functions
  this.getLists = getLists;
  this.showList = showList;

  function getLists() {
    console.log('getLists')
    $http.get(`${server}/lists`)
      .then(response => {
        console.log(response);
        self.lists = response.data.lists;
        console.log(self.lists);
      })
  }

  function showList(listId) {
    console.log('show list')
    console.log(listId)
    $http.get(`${server}/lists/${listId}`)
      .then(response => {
        console.log(response);
        self.list = response.data.list;
        self.todo = response.data.todos
        // console.log(self.lists);
        $state.go('showList', {listId: listId})
      })
  }

  getLists();
}
