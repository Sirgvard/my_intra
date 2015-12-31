var app = angular.module('myApp');

app.controller('mainCtrl', ['$scope', '$state', function($scope, $state){
  $scope.login = function(){
    $state.go('login');
  };
  $scope.register = function(){
    $state.go('register');
  };
}]);

app.controller('lostCtrl', ['$scope', '$state', function($scope, $state){
  $scope.home = function(){
    $state.go('home');
  };
}]);

app.controller('loginCtrl', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService){
  $scope.login = function(){
    $scope.error = false;
    $scope.disabled = true;

    AuthService.logIn($scope.loginForm)
    .error(function(error){
      $scope.error = true;
      $scope.errorMessage = "Some data was invalid !";
      $scope.disabled = false;
      $scope.loginForm = {};
    })
    .then(function(){
      $state.go('user');
      $scope.disabled = false;
      $scope.loginForm = {};
    });
  };
  $scope.goSaveAccount = function(){
    $state.go('home');
  };
  $scope.goRegister = function(){
    $state.go('register');
  };
}]);

app.controller('registerCtrl', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService){
  $scope.register = function(){
    $scope.error = false;
    $scope.disabled = true;
    AuthService.register($scope.registerForm)
    .error(function(error){
      $scope.error = true;
      $scope.errorMessage = "Some data was invalid !";
      $scope.disabled = false;
      $scope.registerForm = {};
    })
    .then(function(){
      $state.go('login');
      $scope.disabled = false;
      $scope.registerForm = {};
    });
  };
}]);

app.controller('adminCtrl', ['$scope', 'Users','Tickets','Servers', '$state', 'AuthService', '$http', //Dont forget to add ping once coded !
function($scope, Users, Tickets, Servers, $state, AuthService, $http){
  Users.getAll();
  Tickets.findCurrentTickets().success(function(ticket){
    $scope.tickets = ticket;
  });
  Servers.getAll();
  $scope.allUsers = Users.users;
  $scope.allServers = Servers.servers;
  $scope.categories1 = problem1;
  $scope.categories4 = userInpact;
  $scope.update1 = function(){
    $scope.categories3 = {};
    $scope.ticketForm.type2 = {};
    switch($scope.ticketForm.type1.id){
      case 1: $scope.categories2 = problem2;
      break;
      case 2: $scope.categories2 = problem3;
      break;
      case 3: $scope.categories2 = problem4;
      break;
      case 4: $scope.categories2 = problem5;
      break;
    }
  };
  $scope.update2 = function(){
    switch($scope.ticketForm.type2.id){
      case 5: $scope.categories3 = problem6;
      break;
      case 6: $scope.categories3 = problem7;
      break;
      case 7: $scope.categories3 = problem8;
      break;
      case 8: $scope.categories3 = problem9;
      break;
      case 9: $scope.categories3 = problem10;
      break;
      case 10: $scope.categories3 = problem11;
      break;
      case 11: $scope.categories3 = problem12;
      break;
      case 12: $scope.categories3 = problem13;
      break;
      case 13: $scope.categories3 = problem14;
      break;
      case 14: $scope.categories3 = problem15;
      break;
      case 15: $scope.categories3 = problem16;
      break;
      case 16: $scope.categories3 = problem17;
      break;
      case 17: $scope.categories3 = problem18;
      break;
      case 18: $scope.categories3 = problem19;
      break;
      case 19: $scope.categories3 = problem20;
      break;
      case 20: $scope.categories3 = problem21;
      break;
    }
  };
  $scope.seeTicket = function(id){
    $state.go("adminTicket", {'id': id});
  };
  $scope.seeTickets = function(){
    $state.go("adminTickets");
  };
  $scope.seeUser = function(id){
    $state.go("adminUser", {'id': id});
  };
  $scope.seeUsers = function(){
    $state.go("adminUsers");
  };
  $scope.addServer = function(){
    console.log('POST DE SERV EN COURS');
    $scope.serverForm.author = AuthService.currentUserID();
    Servers.add($scope.serverForm);
    Servers.getAll();
  };
  $scope.removeServer = function(server){
    console.log('ERAS DE SERV EN COURS');
    Servers.delete(server);
    Servers.getAll();
  };
  // $scope.pingServer = function(server){
  //   ping.ping(server).success(function(data){
  //     server.response = data;
  //   });
  // };
  $scope.addTicket = function(){
    if($scope.ticketForm.title != null &&
      $scope.ticketForm.type1 != null &&
      $scope.ticketForm.type2 != null &&
      $scope.ticketForm.type3 != null &&
      $scope.ticketForm.impact != null &&
      $scope.ticketForm.room != null &&
      $scope.ticketForm.description != null){
        $scope.ticketForm.authorUsername = AuthService.currentUser();
        $scope.ticketForm.author = AuthService.currentUserID();
        $scope.ticketForm.weight = 0;
        Tickets.add($scope.ticketForm);
        $scope.ticketForm = {};
        Tickets.findCurrentTickets();
      }
    };
  }]);

  app.controller('userCtrl', ['$scope', 'Users','Tickets', 'AuthService', '$state', function($scope, Users, Tickets, AuthService, $state){
    Users.get(AuthService.currentUserID()).success(function(user){
      $scope.user = user;
      Tickets.findMyTickets(user._id).success(function(ticket){
        $scope.tickets = ticket;
      });
    });
    $scope.seeTicket = function(id){
      $state.go("userTicket", {'id': id});
    }
    $scope.addTicket = function(){
      if($scope.ticketForm.title != null &&
        $scope.ticketForm.type1 != null &&
        $scope.ticketForm.type2 != null &&
        $scope.ticketForm.type3 != null &&
        $scope.ticketForm.impact != null &&
        $scope.ticketForm.room != null &&
        $scope.ticketForm.description != null){
          $scope.ticketForm.authorUsername = AuthService.currentUser();
          $scope.ticketForm.author = AuthService.currentUserID();
          $scope.ticketForm.weight = 0;
          Tickets.add($scope.ticketForm);
          $scope.ticketForm = {};
          Tickets.findMyTickets(AuthService.currentUserID()).success(function(ticket){
            $scope.tickets = ticket;
          });
        }
      }

      $scope.categories1 = problem1;
      $scope.categories4 = userInpact;
      $scope.update1 = function(){
        $scope.categories3 = {};
        $scope.ticketForm.type2 = {};
        switch($scope.ticketForm.type1.id){
          case 1: $scope.categories2 = problem2;
          break;
          case 2: $scope.categories2 = problem3;
          break;
          case 3: $scope.categories2 = problem4;
          break;
          case 4: $scope.categories2 = problem5;
          break;
        }
      };
      $scope.update2 = function(){
        switch($scope.ticketForm.type2.id){
          case 5: $scope.categories3 = problem6;
          break;
          case 6: $scope.categories3 = problem7;
          break;
          case 7: $scope.categories3 = problem8;
          break;
          case 8: $scope.categories3 = problem9;
          break;
          case 9: $scope.categories3 = problem10;
          break;
          case 10: $scope.categories3 = problem11;
          break;
          case 11: $scope.categories3 = problem12;
          break;
          case 12: $scope.categories3 = problem13;
          break;
          case 13: $scope.categories3 = problem14;
          break;
          case 14: $scope.categories3 = problem15;
          break;
          case 15: $scope.categories3 = problem16;
          break;
          case 16: $scope.categories3 = problem17;
          break;
          case 17: $scope.categories3 = problem18;
          break;
          case 18: $scope.categories3 = problem19;
          break;
          case 19: $scope.categories3 = problem20;
          break;
          case 20: $scope.categories3 = problem21;
          break;
        }
      };
    }]);

    app.controller('uniqueUserCtrl', ['$scope', 'Users','Tickets', '$state','$stateParams', function($scope, Users, Tickets, $state, $stateParams){
      Users.get($stateParams.id).success(function(user){
        $scope.user = user;
        Tickets.findMyTickets(user._id).success(function(ticket){
          console.log(ticket);
          $scope.tickets = ticket
        });
      });
      $scope.deleteUser = function(user){
        Users.delete(user);
        $state.go('adminUsers');
      }
      $scope.seeTicket = function(ticket){
        $state.go('adminTicket', {"id" : ticket._id});
      }
    }]);

    app.controller('ticketCtrl', ['$scope', 'Tickets', '$state','$stateParams','AuthService','Users' ,function($scope, Tickets, $state, $stateParams, AuthService, Users){

      var id = $stateParams.id;
      Tickets.get(id).success(function(ticket){
        $scope.ticket = ticket;
        console.log($scope.ticket);
      });
      Users.get(AuthService.currentUserID()).success(function(user){
        $scope.user = user;
      });
      $scope.seeAuthor = function(id){
        $state.go('adminUser',{"id":id});
      }

      $scope.handleTicket = function(){
        Tickets.handle($scope.ticket, AuthService.currentUserID(), AuthService.currentUser()).success(function(data){
          $scope.ticket = data;
        });
      }

      $scope.resolveTicket = function(){
        Tickets.resolve($scope.ticket).success(function(data){
          $scope.ticket = data;
        });
      }

      $scope.reOpenTicket = function(){
        var id = AuthService.currentUserID();
        var username = AuthService.currentUser();
        Tickets.reOpen($scope.ticket, id, username).success(function(data){
          $scope.ticket = data;
        });
      }

      $scope.deleteTicket = function(){
        Tickets.delete(id).success(function(data){
          $state.go('adminTickets');
          console.log("Ticket deleted");
        });
      }

      $scope.addComment = function(){
        if($scope.commentForm.description != null){
          var id = AuthService.currentUserID();
          var username = AuthService.currentUser();
          Tickets.addComment($scope.ticket, id, username, $scope.commentForm.description).success(function(data){
            $scope.commentForm.description = null;
            $scope.ticket = data;
          });
        }
      }
    }]);

    app.controller('userTicketCtrl', ['$scope', 'Tickets', '$state','$stateParams','AuthService', 'Users', function($scope, Tickets, $state, $stateParams, AuthService, Users){

      Users.get(AuthService.currentUserID()).success(function(user){
        $scope.user = user;
      });
      var id = $stateParams.id;
      Tickets.get(id).success(function(ticket){
        $scope.ticket = ticket;
      });
      $scope.addComment = function(){
        if($scope.commentForm.description != null){
          var id = AuthService.currentUserID();
          var username = AuthService.currentUser();
          Tickets.addComment($scope.ticket, id, username, $scope.commentForm.description).success(function(data){
            $scope.commentForm.description = null;
            $scope.ticket = data;
          });
        }
      }
    }]);

    app.controller('ticketsCtrl', ['$scope', 'Tickets', '$state', function($scope, Tickets, $state){
      $scope.seeTicket = function(id){
        $state.go("adminTicket", {'id': id});
      }
      Tickets.findCurrentTickets().success(function(ticket){
        $scope.tickets = ticket;
      });
    }]);

    app.controller('navbarCtrl', ['$scope', 'AuthService', '$state', function($scope, AuthService, $state){
      $scope.logout = function(){
        AuthService.logOut();
        $state.go("login");
      }
      $scope.home = function(){
        $state.go("home");
      }
      $scope.dashboard = function(){
        $state.go("user");
      }
      $scope.settings = function(){
        $state.go("settings");
      }
      $scope.news = function(){
        $state.go("news");
      }
    }]);

    app.controller('personnalCtrl', ['$scope', 'Users','AuthService',  function($scope, Users, AuthService){
      Users.get(AuthService.currentUserID()).success(function(response){
        $scope.user=response;
      });
    }]);

    app.controller('allUsersCtrl', ['$scope', 'Users', '$state',  function($scope, Users, $state){
      Users.getAll();
      $scope.allUsers = Users.users;
      $scope.seeUser = function(id){
        $state.go("adminUser", {'id': id});
      }
    }]);

    app.controller('settingsCtrl', ['$scope', '$state', 'AuthService', 'Users', function($scope, $state, AuthService, Users){

      var id = AuthService.currentUserID();
      Users.get(AuthService.currentUserID()).success(function(user){
        $scope.user = user;
      });
      $scope.updateProfile = function(user){
        Users.updateProfile($scope.settingsForm, user).success(function(data){
          console.log("Profile successfully updated !");
          $state.go('user');
        });
        $state.go('user');
      }
      $scope.updatePassword = function(user){
        if ($scope.settingsForm.newPassword === $scope.settingsForm.newPasswordConfirmation){
          Users.changePassword($scope.settingsForm, user).success(function(data){
            console.log("Password updated");
            $state.go('user');
          });
        }
      }
      $scope.deleteAccount = function(user){
        AuthService.checkPassword($scope.settingsForm.deleteConfirmation, user.username).success(function(data){
          Users.delete(user).success(function(data){
            AuthService.logOut();
            $state.go('login');
            console.log("Account deleted");
          });
        });
      }
    }]);

    app.controller('newsCtrl', ['$scope', '$state', 'AuthService', 'Users', 'News', function($scope, $state, AuthService, Users, News){

      var id = AuthService.currentUserID();
      Users.get(AuthService.currentUserID()).success(function(user){
        $scope.user = user;
        console.log(user);
      });
      News.getAll();
      $scope.news = News.news;
      $scope.postNews = function(user){
        $scope.newsForm.author = user.username;
        News.add($scope.newsForm, user).success(function(data){
          console.log("News posted !");
          News.getAll();
        });
      }
      $scope.deleteNews = function(id){
        News.delete(id).success(function(data){
          console.log("News deleted !");
          News.getAll();
        });
      }
    }]);
