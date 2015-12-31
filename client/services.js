var app = angular.module('myApp');

app.factory('AuthService', ['$q', '$timeout', '$http', '$window', function($q, $timeout, $http, $window){
  var auth = {}
  auth.saveToken = function(token){
    $window.localStorage['intra-token'] = token;
  };

  auth.getToken = function(){
    return $window.localStorage['intra-token'];
  };
  auth.isLoggedIn = function(){
    var token = auth.getToken();

    if (token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  };
  auth.currentUser = function(){
    if (auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.username;
    }
  };
  auth.currentUserID = function(){
    if (auth.isLoggedIn()){
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload._id;
    }
  };
  auth.register = function(user){
    return $http.post('/api/users/register', user).success(function(data){
      auth.saveToken(data.token);
    });
  };
  auth.logIn = function(user){
    return $http.post('/api/users/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };
  auth.logOut = function(){
    $window.localStorage.removeItem('intra-token');
  };
  auth.isAdmin = function(){
    var token = auth.getToken();
    var payload = JSON.parse($window.atob(token.split('.')[1]));
    return payload.admin;
  }
  auth.checkPassword = function(password, username){
    return $http.post('/api/users/login', {username: username, password: password});
  }
  return auth;
}]);

// app.factory('ping', ['$http', function($http) {
//
//   // Pings a URL or IP using HTTP GET request
//   var o = {
//     server: []
//   };
//
//   o.ping = function(server){
//     return $http.get('/api/ping/' + server.address);
//   }
// }]);

app.factory('Users', ['$http', function($http){
  var o = {
    users: []
  };

  o.getAll = function(){
    return $http.get('/api/users').success(function(data){
      angular.copy(data, o.users);
    });
  }

  o.get = function(id){
    return $http.get('/api/users/' + id);
  }

  o.delete = function(user){
    return $http.delete('/api/users/' + user._id);
  }

  o.updateProfile = function(form, user){
    return $http.put('/api/users/' + user._id, form);
  }

  o.changePassword = function(form, user){
    return $http.put('/api/users/updatePassword/' + user._id, form);
  }
  return o;
}]);

app.factory('Tickets', ['$http', function($http){
  var o = {
    tickets: []
  };

  o.getAll = function(){
    return $http.get('/api/tickets').success(function(data){
      angular.copy(data, o.tickets);
    });
  }

  o.get = function(id){
    return $http.get('/api/tickets/' + id);
  }

  o.update = function(id){
    return $http.put('/api/tickets/' + id);
  }

  o.delete = function(id){
    return $http.delete('/api/tickets/' + id);
  }

  o.add = function(ticket){
    console.log(ticket);
    ticket.weight = ticket.type1.weight + ticket.type2.weight + ticket.type3.weight + ticket.impact.weight;
    if (ticket.weight > 150){
      ticket.level = "Platinum";
    }
    else if (ticket.weight > 100) {
      ticket.level = "Gold";
    }
    else if (ticket.weight > 50) {
      ticket.level = "Silver";
    }
    else {
      ticket.level = "Bronze";
    }
    ticket.type1 = ticket.type1.name;
    ticket.type2 = ticket.type2.name;
    ticket.type3 = ticket.type3.name;
    ticket.impact = ticket.impact.name;
    return $http.post('/api/tickets', ticket);
  }

  o.handle = function(ticket, id_handler, username_handler){
    ticket.isInProgress= true;
    ticket.handler = id_handler;
    ticket.handlerUsername = username_handler;
    return $http.put('/api/tickets/' + ticket._id, ticket);
  }

  o.resolve = function(ticket){
    ticket.isInProgress= false;
    ticket.isValidated = true;
    return $http.put('/api/tickets/' + ticket._id, ticket);
  }

  o.reOpen = function(ticket, id_handler, username_handler){
    ticket.handler = id_handler;
    ticket.isInProgress = true;
    ticket.isValidated = false;
    ticket.handlerUsername = username_handler;
    return $http.put('/api/tickets/' + ticket._id, ticket);
  }

  o.addComment = function(ticket, id_poster, username_poster, description){
    ticket.comments.push({'description': description, 'author': username_poster, 'date': new Date()})
    return $http.put('/api/tickets/' + ticket._id, ticket);
  }

  o.findMyTickets = function(id){
    return $http.get('/api/tickets/specificUser/' + id);
  }

  o.findCurrentTickets = function(){
    return $http.get('/api/tickets/currentTickets/current');
  }

  return o;
}]);

app.factory('Servers', ['$http', function($http){
  var o = {
    servers: []
  };
  o.getAll = function(){
    return $http.get('/api/servers').success(function(data){
      angular.copy(data, o.servers);
    });
  }
  o.add = function(server){
    return $http.post('/api/servers', server);
  };
  o.delete = function(server){
    return $http.delete('/api/servers/' + server._id);
  };
  return o;
}]);

app.factory('News', ['$http', function($http){
  var o = {
    news: []
  };

  o.getAll = function(){
    return $http.get('/api/news').success(function(data){
      angular.copy(data, o.news);
    });
  }

  o.add = function(news){
    return $http.post('/api/news', news);
  }

  o.delete = function(id){
    return $http.delete('/api/news/' + id);
  }

  return o;
}]);
