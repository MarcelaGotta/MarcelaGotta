var appMG = angular.module('appMG', ['ngRoute']);
appMG.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'home.html'
    }).otherwise({
        redirectTo: '/',
        templateUrl: '404.html'
    });
}]);
appMG.controller('homeCrtl', ['$scope', function($scope){
    $scope.moreName = function() {
        $scope.nombre = " " + $scope.nombre;
    }
    function myPresentation() {
        $('.box-presentation').show();
        $('.box-what-name').hide();
        $(this).hide();
        $(".typed-present").typed({
            stringsElement: $('.type-presentation'),
            backspace: 0,
            callback: function() {$('.btn-more').show()}
        });
    }
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        backspace: 0,
        callback: function() {$('.form-send').show()}
    });
    $('.btn-send').on('click', function(){
        alert($('.nombre').val().length);
        if($('.nombre').val().length !== 1) {
            return myPresentation();
        }
    });
    $('.btn-skip').on('click', function(){
        return myPresentation();
    });
}]);

