angular.module('todo_app', ['ui.router'])
  .config(appRouter);

function appRouter ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
                      enabled: true,
                      requireBase: false
                    });


  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/partials/index.html'
  })
  .state('newList', {
    url: '/lists/new',
    templateUrl: '/partials/lists/new.html',
  })
  .state('showList', {
    url: '/lists/{listId}',
    templateUrl: '/partials/lists/show.html',
  });

}
