function HomeController($scope, $http) {
  var self = this;
  var server = 'http://localhost:3000'

  this.lists = ""

  this.test = test;

  function test() {
    console.log('test')
    $http.get(`${server}/lists`)
      .then(response => {
        console.log(response);
        self.lists = response.data;
        // console.log(self.meow);
      })
  }

  test();
}
