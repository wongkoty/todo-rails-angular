angular.module('todo_app', ['ui.router'])
  .config(appRouter);

function appRouter ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/partials/index.html'
  })
  .state('boardShow', {
    url: '/boards/{boardId}',
    templateUrl: '/partials/boards/show.html'
  });
}
