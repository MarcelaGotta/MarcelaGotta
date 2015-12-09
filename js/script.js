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
    $(function(){
        $("#contact_form .wrap > span.close").click(function() {
            $(".writeus .toggle-button").click();
        });

        $("#contact_form .wrap .form .success > span.close").click(function() {
            $("#contact_form form")[0].reset();
            $("#contact_form .success").fadeOut();
        });
        $("#contact_form form").submit(function (event) {
            event.preventDefault();
            var form = $(this);
            var postData = form.serialize();
            var status = form.parent().find(".status");
            var success = form.parent().find(".success");
            success.removeClass('shake')
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: postData,
                success: function(data) {
                    if (data == "success") {
                        status.html("").hide();
                        success.fadeIn();
                    } else if (data == "invalid") {
                        status.toggleClass('shake').html("This email is invalid.").slideDown();
                    } else {
                        status.toggleClass('shake').html("Oups, something went wrong!").slideDown();	
                    }
                },
                error: function () {
                    status.toggleClass('shake').html("Oups, something went wrong!").slideDown();
                }
            });
        });
    });
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
                    'title'         : 'Kaoh Website',
                    'description'   : 'In this project I took charge of developing the website and its design, logo design and the design of the sliders. This web site has been used as CMS wordpress. It has been developed with HTML5, CSS3, Javascript and jQuery. It is completely responsive and optimized for SEO.',
                    'thumbnail'     : ['images/kaoh-res-thumb.png'],
                    'large'         : ['images/kaoh-res.png', 'images/kaoh-res.png'],
                    'button_list'   :
                    [
                        { 'title':'Website', 'url' : 'http://kaoh.es/', 'new_window' : true }
                    ],
                    'tags'          : ['Portfolio']
                },
                {
                    'title'         : 'Percent Servicios Website',
                    'description'   : 'In this project I took charge of developing the website and its design, logo design and the design of the sliders. This web site has been used as CMS wordpress. It has been developed with HTML5, CSS3, Javascript and jQuery. It is completely responsive and optimized for SEO.',
                    'thumbnail'     : ['images/percent-servicios-res-thumb.png'],
                    'large'         : ['images/percent-servicios-res.png', 'images/kaoh-res.png'],
                    'button_list'   :
                    [
                        { 'title':'Website', 'url' : 'http://percentservicios.com/', 'new_window' : true }
                    ],
                    'tags'          : ['Real Estate']
                }
            ]
        });
        
    });
}]);