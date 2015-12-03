var appMG = angular.module('appMG', ['ngRoute', 'ui.bootstrap', 'ngDialog']);
appMG.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'home.html'
    }).when('/about', {
        templateUrl: 'about.html'
    }).when('/portfolio', {
        templateUrl: 'portfolio.html'
    }).when('/contact', {
        templateUrl: 'contact.html'
    }).when('/website', {
        templateUrl: 'website.html'
    }).otherwise({
        redirectTo: '/',
        templateUrl: '404.html'
    });    
}]);
appMG.run(['$rootScope', function($rootScope){
    $rootScope.modelClose = false;
    
}]);
appMG.controller('homeCrtl', ['$scope', 'ngDialog', '$rootScope', function($scope, ngDialog, $rootScope){
    if($rootScope.modelClose == false) {
        ngDialog.openConfirm({
            template: 'content1',
        });
    };
    $rootScope.$on('ngDialog.closed', function (e, $dialog) {
        $rootScope.modelClose = true;
    });
        $(".typed-present").typed({
            strings: ["Front-End Developer", "Front-End in HTML5", "Front-End in CSS3", "Front-End in Javascript", "Front-End in Jquery", "Front-End in Bootstrap", "Front-End in Angularjs", "Front-End in Responsive Design", "Front-End in SEO On Page", "Front-End in Wordpress", "Front-End in Json", "Front-End in SASS", "Front-End in Jade", "Front-End in Git", "Front-End in Gulp", "Front-End in Grunt", "Front-End in Photoshop", "Front-End in Illustrator", "Front-End in HTML5", "Front-End in CSS3", "Front-End in Javascript", "Front-End in Jquery", "Front-End in Bootstrap", "Front-End in Angularjs", "Front-End in Responsive Design", "Front-End in SEO On Page", "Front-End in Wordpress", "Front-End in Json", "Front-End in SASS", "Front-End in Jade", "Front-End in Git", "Front-End in Gulp", "Front-End in Grunt", "Front-End in Photoshop", "Front-End in Illustrator" ],
            backspace:  function(){null},
            loop: true
            });
    $(function(){
        var fullHeight = $(document).height();
        $('body').css('min-height', fullHeight);
    });
    
}]);

appMG.controller('contactCrtl', ['$scope', '$rootScope', function($scope, $rootScope){
    
}]);
appMG.controller('aboutCrtl', ['$scope', '$rootScope', function($scope, $rootScope){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });
}]);
appMG.controller('mainCrtl', ['$scope', function($scope){
        $scope.isActive = false;
        $scope.isOpen = false;
          $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
            $scope.isOpen = !$scope.isOpen;
          };
        
}]);

appMG.controller('last-works', ['$scope', function($scope){
    $(function(){
        $("#galeria-works").elastic_grid({
            'showAllText' : 'All',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/1.jpg', 'images/small/2.jpg', 'images/small/3.jpg', 'images/small/10.jpg', 'images/small/11.jpg'],
                    'large'         : ['images/large/1.jpg'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : false}
                    ],
                    'tags'          : ['Self Portrait']
                }
            ]
        });
    });
}]);