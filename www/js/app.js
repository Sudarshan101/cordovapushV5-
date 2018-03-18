// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, $http, $cordovaPushV5, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

     var options = {
        android: {
          senderID: "1078556049697"
        },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      };
      
      // initialize
      $cordovaPushV5.initialize(options).then(function() {
        // start listening for new notifications
        $cordovaPushV5.onNotification();
        // start listening for errors
        $cordovaPushV5.onError();
        
        // register to get registrationId
        $cordovaPushV5.register().then(function(registrationId) {
          console.log(registrationId);
          $rootScope.pushId = registrationId;
          // save `registrationId` somewhere;
        })
      });
      
      // triggered every time notification received
      $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
      });

      // triggered every time error occurs
      $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
        // e.message
      });

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
