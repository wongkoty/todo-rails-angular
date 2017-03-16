function TodoController($scope, $http, $state, $stateParams) {

  const self = this;
  const server = 'http://localhost:3000';

  self.test = test;

  function test() {
    console.log('test')
  }
}
