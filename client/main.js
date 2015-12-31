var app = angular.module('myApp', ['ui.router', 'ngAnimate', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'mainCtrl'
    })
    .state('404', {
        url: '/404',
        controller: 'lostCtrl',
        templateUrl: 'templates/404.html'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(AuthService.isLoggedIn()){
                $state.go('user');
            }
        }]
    })
    .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(AuthService.isLoggedIn()){
                $state.go('user');
            }
        }]
    })
    .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
        }]
    })
    .state('user', {
        url: '/user',
        templateUrl: 'templates/userPanel.html',
        controller: 'userCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(AuthService.isAdmin()){
              $state.go('admin');
            }
        }]
    })
    .state('userHelp', {
        url: '/user/help',
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(AuthService.isAdmin()){
              $state.go('admin');
            }
        }]
    })
    .state('userDocs', {
        url: '/user/docs',
        templateUrl: 'templates/docs.html',
        controller: 'docsCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(AuthService.isAdmin()){
              $state.go('admin');
            }
        }]
    })
    .state('userTicket', {
        url: '/user/tickets/:id',
        templateUrl: 'templates/ticket.html',
        controller: 'userTicketCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
        }]
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'templates/adminPanel.html',
        controller: 'adminCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(!AuthService.isAdmin()){
              $state.go('user');
            }
        }]
    })
    .state('adminTickets', {
        url: '/admin/tickets',
        templateUrl: 'templates/tickets.html',
        controller: 'ticketsCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(!AuthService.isAdmin()){
              $state.go('user');
            }
        }]
    })
    .state('adminTicket', {
        url: '/admin/tickets/:id',
        templateUrl: 'templates/ticket.html',
        controller: 'ticketCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(!AuthService.isAdmin()){
              $state.go('user');
            }
        }]
    })
    .state('adminUsers', {
        url: '/admin/users',
        templateUrl: 'templates/users.html',
        controller:'allUsersCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(!AuthService.isAdmin()){
              $state.go('user');
            }
        }]
    })
    .state('adminUser', {
        url: '/admin/users/:id',
        templateUrl: 'templates/user.html',
        controller: 'uniqueUserCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
            if(!AuthService.isAdmin()){
              $state.go('user');
            }
        }]
    })
    .state('news', {
        url: '/news',
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl',
        onEnter: ['$state', 'AuthService', function($state, AuthService){
            if(!AuthService.isLoggedIn()){
                $state.go('login');
            }
        }]
    });
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true);
}]);
