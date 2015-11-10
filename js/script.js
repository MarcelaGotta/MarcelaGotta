var appMG = angular.module('appMG', ['ngRoute']);
appMG.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'home.html'
    }).when('/about', {
        templateUrl: 'about.html'
    }).when('/portfolio', {
        templateUrl: 'portfolio.html'
    }).when('/contact', {
        templateUrl: 'contact.html'
    }).otherwise({
        redirectTo: '/',
        templateUrl: '404.html'
    });
}]);
appMG.controller('homeCrtl', ['$scope', function($scope){
    function myPresentation() {
        $('.box-presentation').show();
        $('.box-what-name').hide();
        $(this).hide();
        $(".typed-present").typed({
            strings: ["I have experience in HTML", "I have experience in CSS", "I have experience in Javascript"],
            backspace:  function(){null},
                callback: function() {$('.btn-more').show()}
            });
        }

    $('.btn-send').on('click', function(){
        if($('.nombre').val().length !== 0) {
            return myPresentation();
        }
    });
    $('.btn-skip').on('click', function(){
        return myPresentation();
    });
}]);

