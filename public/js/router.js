angular.module('todo_app', ['ui.router'])
  .config(appRouter);

function appRouter ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/partials/index.html'
  })
  .state('showList', {
    url: '/lists/{boardId}',
    templateUrl: '/partials/lists/show.html'
  });
}
