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
            strings: ["I have knowledge in HTML5", "I have knowledge in CSS3", "I have knowledge in Javascript", "I have knowledge in Jquery", "I have knowledge in Bootstrap", "I have knowledge in Angularjs", "I have knowledge in Responsive Design", "I have knowledge in SEO On Page", "I have knowledge in Wordpress", "I have knowledge in Json", "I have knowledge in SASS", "I have knowledge in Jade", "I have knowledge in Git", "I have knowledge in Gulp", "I have knowledge in Grunt", "I have knowledge in Photoshop", "I have knowledge in Ilustrator", "I have knowledge in HTML5", "I have knowledge in CSS3", "I have knowledge in Javascript", "I have knowledge in Jquery", "I have knowledge in Bootstrap", "I have knowledge in Angularjs", "I have knowledge in Responsive Design", "I have knowledge in SEO On Page", "I have knowledge in Wordpress", "I have knowledge in Json", "I have knowledge in SASS", "I have knowledge in Jade", "I have knowledge in Git", "I have knowledge in Gulp", "I have knowledge in Grunt", "I have knowledge in Photoshop", "I have knowledge in Ilustrator"],
            backspace:  function(){null},
            loop: true
            });
    
}]);

appMG.controller('contactCrtl', ['$scope', '$rootScope', function($scope, $rootScope){
        
       var C = $('#container-box'),
  	  		A = $('#open'),
  	  		L = $('#letter'),
           B = $('.button.con'),
				 H = $('#letter hgroup h2'),
           F = $('.front'),
           W = $('#wrapper'),
  	  		P = $('#perspective'),
           closed = true;
$(function() {
  // Handler for .ready() called.
  $("textarea").text("");
});
  
   F.click(function(){
				C.css({
					'transition':'all 1s',
					'transform':'rotateY(180deg)',
				});
				A.css({
					'transition':'all 1s .5s',
					'transform':'rotateX(180deg)',
					'z-index': '0'
				});
  			W.css({
             'visibility':'visible'
				});
    });

     	// open/close and spin
    W.click(function() {
      var message =$.trim($('textarea').val());
      if (message.length > 0) {//they wrote something in the message
      var r=confirm("You have not sent your message, would you still like to close the form?");
      if (r==false)//they don't want to close
      {
        return;
      }
      else //they do want to close. clear message
      {
     document.getElementById("myform").reset();
      }
     }
         if(closed===false){
         L.css({
					'transition':'all .7s',
					'top':'3px',
					'height':'200px'
				});
     		P.css({
     			'transform':'translateY(0px)'
     		});
				F.css({
     			'transform':'rotateZ(0deg)'
				}); 
 				H.css({
     			'transition':'all .5s',
     			'transform':'rotateZ(0deg)'
				});
				C.css({
					'transition':'all 1.2s .95s'
				});
				A.css({
					'transition':'all 1.2s .7s'
				});
				H.css({
					'transition':'all .5s'
				});
           document.getElementById("info").innerHTML = "P:123.456.7890";
          closed=true;
        }
        else{
				C.css({
					'transition':'all 1s .5s',
				});
				A.css({
					'transition':'all .5s',
				});  
          closed=false;
        }
				C.css({
					'transform':'rotateY(0deg) rotate(3deg)'
				});
				A.css({
					'transform':'rotateX(0deg)',
					'z-index': '10'
				});  
     		W.css({
            //'transition':'all .5s',
             'visibility':'hidden'
        }); 
     	});
     	// Open letter
     B.click(function() {
 
				L.css({
					'transition':'all .5s 1s',
					'top':'-600px',
					'height':'550px'
				});
     		P.css({
     			'transition':'all 1s',
     			'transform':'translateY(450px)'
     		});
				H.css({
     			'transition':'all 1s',
     			'transform':'rotateZ(180deg)'
				});
         document.getElementById("info").innerHTML = "Contact Me!";
     	}); 


}]);
appMG.controller('mainCrtl', ['$scope', function($scope){
    $scope.$on('$viewContentLoaded', addJquery);
    
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

$(addJquery());
function addJquery() {
    $('.burger').on('click', function(){
        $(this).toggleClass('open');
        $('header').toggleClass('abierto');
        $('body').toggleClass('cerrado');
    });
}