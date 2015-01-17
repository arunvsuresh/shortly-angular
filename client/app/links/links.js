angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  angular.extend($scope, Links);
  // link properties
  $scope.model = {
      url: 'url',
      base_url: 'base_url',
      timeStamp: 'timeStamp',
      code: 'code',
      visits: 'visits',
      title: 'title'
  }
});
