var Millenium = angular.module('Millenium', ['ngRoute']);


    Millenium.config(function($routeProvider) {
// Routes
        $routeProvider
            .when('/main', {
                templateUrl: 'views/Main.html'

            })
            .when('/planetes', {
                templateUrl: 'views/Planetes.html'

            })
            .when('/etoiles', {
                templateUrl: 'views/Étoiles.html'       })
            .when('/lunes', {
                templateUrl: 'views/Lunes.html'

            })
            .when('/info/:id?', {
                templateUrl: 'views/Info.html',
                controller: 'detailCtrl'

            })
            .otherwise({
                retirectTo: '/main'
            })
    })
       // animated modals

        $('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

// link json
    Millenium.run(function($rootScope, $http) {
    $http.get("index.json")
        .then(function(response) {
            // reponse.data correspond au données du JSON et le renvoi dans la variable 'element'
            $rootScope.element = response.data;
            console.log($rootScope.element);
        });

    Millenium.controller('detailCtrl', function($rootScope, $scope, $http, $routeParams) {
        $scope.index = $routeParams.id;
        $scope.type = $scope.element[$scope.id].type;
        $scope.nom = $scope.element[$scope.id].nom;
        $scope.localisation = $scope.element[$scope.id].localisation;
        $scope.satellites = $scope.element[$scope.id].satellites;
        $scope.paysages = $scope.element[$scope.id].paysages;
        $scope.sites = $scope.element[$scope.id].sites;
        $scope.langues = $scope.element[$scope.id].langues;
        $scope.description = $scope.element[$scope.id].description;
        $scope.activites = $scope.element[$scope.id].activites;
        $scope.dpopulation = $scope.element[$scope.id].ammenage;

    });
});