angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('analyticsCtrl', function($scope) {

})

.controller('manualControllerCtrl', function($scope) {

})

.controller('profileCtrl', function($scope) {

})

.controller('dataCtrl',function($scope, $http){
    $http.get("http://localhost/aquifer.io/ionic.php")
    .then(function (response)
      {
      $scope.data = response.data;}
      );
})
