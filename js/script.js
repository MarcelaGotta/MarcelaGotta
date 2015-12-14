var en = {
    BETTEREXPERIENCE: 'For a better user experience Please write your name, or some nickname to refer to you',
    NOTE: 'Note',
    SEND: 'Send',
    CANCEL: 'Cancel',
    WELCOME: 'welcome',
    HI: 'Hi',
    MEWELCOME: "I'm freelance front-end developer, with 7+ year of professional experience working in various web related roles. I currently live in Madrid",
    ILOVE: 'iLove',
    ILOVEARRAY: "'Front-End Development', 'Videogames', 'Books'",
    ABOUTITTLE: 'About Me',
    PORTFOLIOTITTLE: 'My Portfolio',
    MEDESCRIPTION1: "I'm a front-end developer specializing",
    AND: 'and',
    MEDESCRIPTION2: 'I have experience in developing web sites fully adaptable to any device', 
    MEDESCRIPTION3: 'based on W3C standards. I Development CMS templates and I possess great knowledge in ',
    MEDESCRIPTION4: "Everywhere that I do give my best, and offer websites with clean and optimal code for better positioning on search engines",
    SKILLS: 'Skills',
    WORKEXPERIENCE: 'Work Experience',
    FRONTDEVELOPER: 'Front-End Developer',
    WEBDEVELOPER: 'Web Developer',
    TECNOIMPLEMENTED: 'Technologies Implemented',
    LASTWORK: 'Lastest Works',
    MYLAB: 'My Lab',
    CONTACTME: 'Contact Me',
    CONTACTFORM: 'Contact Form',
    CONTACTINFORMATION: 'Contact Information',
    IFYOU: 'If you have any questions you can send me a message and I will answer soon',
    NAME: 'Name',
    EMAIL: 'Email',
    MESSAGE: 'Message',
    WRITEYOUR: 'Write your',
    YOURMESSAGE: 'Your Message Here',
    DESTECNOLOGY: 'The technologies implemented for the development of this site are',
    ABOUTHIS: 'About This Website'
};
var es = {
    BETTEREXPERIENCE: 'Para una mejor experiencia de usuario, por favor escribe tu nombre o algún seudónimo para referirme a ti',
    NOTE: 'Nota',
    SEND: 'Enviar',
    CANCEL: 'Cancelar',
    WELCOME: 'bienvenido',
    HI: 'Hola',
    MEWELCOME: "Soy desarrolladora Front-End freelance, con más de 7 años de experiencia profesinal, he trabajado en varios proyectos con diferentes roles. Actualmente vivo en madrid",
    ILOVE: 'yoAmo',
    ILOVEARRAY: "'Desarrollo Front-End', 'Videojuegos', 'Libros'",
    ABOUTITTLE: 'Sobre mi',
    PORTFOLIOTITTLE: 'Mi Portafolio',
    MEDESCRIPTION1: "Soy una desarrolladora Front-End especializada en",
    AND: 'y',
    MEDESCRIPTION2: 'Tengo experiencia desarrollando sitios web adaptables a cualquier dispositivo', 
    MEDESCRIPTION3: 'basandome en los estándares W3C. Desarrollo plantillas de diferentes CMS, y poseo grandes conocimientos en ',
    MEDESCRIPTION4: "En todo lo que hago doy lo mejor de mi, y ofrezco sitios web con código limpio y optimizado para  el posicionamiento en buscadores",
    SKILLS: 'Habilidades',
    WORKEXPERIENCE: 'Experiencia Laboral',
    FRONTDEVELOPER: 'Desarrolladora Front-End',
    WEBDEVELOPER: 'Desarrolladora Web',
    TECNOIMPLEMENTED: 'Tecnologías Implementadas',
    LASTWORK: 'Últimos Trabajos',
    MYLAB: 'Mi Laboratorio',
    CONTACTME: 'Contáctame',
    CONTACTFORM: 'Formulario de Contacto',
    CONTACTINFORMATION: 'Información de Contacto',
    IFYOU: 'Si tienes alguna duda puedes enviarme un mensaje y te responderé lo más pronto posible',
    NAME: 'Nombre',
    EMAIL: 'Correo',
    MESSAGE: 'Mensaje',
    WRITEYOUR: 'Escribe tu',
    YOURMESSAGE: 'Tu Mensaje Aquí',
    DESTECNOLOGY: 'Las tecnologías implementadas para el desarrollo de este sitio web han sido',
    ABOUTHIS: 'Sobre este sitio web'
};

var appMG = angular.module('appMG', ['ngRoute', 'ui.bootstrap', 'ngDialog', 'pascalprecht.translate']);
appMG.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider){
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
    $translateProvider.translations('en', en);
    $translateProvider.translations('es', es);
    $translateProvider.preferredLanguage('en');
     $translateProvider.use('en');
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
        $('main').css('min-height', fullHeight - $('footer').innerHeight());
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
appMG.controller('mainCrtl',   ['$scope', '$translate', function($scope, $translate){
        $scope.isActive = false;
        $scope.isOpen = false;
          $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
            $scope.isOpen = !$scope.isOpen;
          };
    
    $scope.checked = function() {
       $translate.use(($translate.use() === 'en') ? 'es' : 'en');
    }
        
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