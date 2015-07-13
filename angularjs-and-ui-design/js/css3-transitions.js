angular.module('myApp', [])
  .controller('NgRepeatCtrl', function($scope) {
    $scope.newCandidate = {};

    $scope.candidates =
      [{name:'Sebastiane', department:'Philosophy'},
       {name:'Wendy', department:'Mathematics'},
       {name:'Mike', department:'Economics'},
       {name:'Adam', department:'Computer Science'},
       {name:'Barton', department:'Electronics'},
       {name:'Clark', department:'Accountancy'},
       {name:'Emma', department:'Mechanical Engineering'},
       {name:'George', department:'Communications'},
       {name:'Mike', department:'Civil Engineering'},
       {name:'Marina', department:'Human Resources'},
       {name:'Julia', department:'Tourism Science'},
       {name:'Donald', department:'Politics'}];

    $scope.appendCandidate = function() {
      if (this.newCandidate.name && this.newCandidate.department) {
        this.candidates.push({ 'name': this.newCandidate.name, 'department': this.newCandidate.department });
      }
    };
  });